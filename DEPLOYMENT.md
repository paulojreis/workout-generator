# Deployment Guide

## Prerequisites

You need a Supabase access token to deploy. Get it from:
https://supabase.com/dashboard/account/tokens

## Step 1: Login to Supabase CLI

```bash
supabase login --token YOUR_ACCESS_TOKEN_HERE
```

Replace `YOUR_ACCESS_TOKEN_HERE` with your actual access token.

## Step 2: Run the Deployment Script

```bash
./deploy.sh
```

This script will:
1. Link your local project to Supabase (update the Project ID in the script)
2. Set the GEMINI_API_KEY secret
3. Deploy the gemini-chat function

## Step 3: Test the Deployed Function

First, get your anon key from:
Supabase Dashboard → Your Project → Settings → API

Then set it as an environment variable and run tests:

```bash
export SUPABASE_ANON_KEY='your_anon_key_here'
./test-production.sh
```

## Manual Deployment (Alternative)

If you prefer to run commands manually:

```bash
# 1. Login
supabase login --token YOUR_ACCESS_TOKEN

# 2. Link project
supabase link --project-ref your_project_id

# 3. Set secret (use environment variable)
export GEMINI_API_KEY='your_actual_api_key_here'
supabase secrets set GEMINI_API_KEY="$GEMINI_API_KEY"

# 4. Deploy function
supabase functions deploy gemini-chat
```

## Your Function URL

Once deployed, your function will be available at:
```
https://your_project_id.supabase.co/functions/v1/gemini-chat
```

## Quick Test

```bash
curl -X POST 'https://your_project_id.supabase.co/functions/v1/gemini-chat' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"prompt":"Hello Gemini!"}'
```

## Troubleshooting

### "Access token not provided"
- You need to run `supabase login --token YOUR_TOKEN` first
- Get token from: https://supabase.com/dashboard/account/tokens

### "Invalid JWT" or "401 Unauthorized"
- Make sure you're using the correct anon key from your project settings
- Check: Supabase Dashboard → Your Project → Settings → API

### "GEMINI_API_KEY not configured"
- Verify the secret was set: `supabase secrets list`
- Re-run: `supabase secrets set GEMINI_API_KEY="your_key"`

---

# Vercel Deployment

## Frontend Application Deployment

### Prerequisites
1. Supabase Edge Function must be deployed (see above)
2. GitHub repository connected to Vercel

### Step 1: Configure Environment Variables in Vercel

Go to your Vercel project settings → Environment Variables and add:

**Required Variables:**
```
VITE_SUPABASE_URL=https://your_project_id.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**Where to get these values:**
- `VITE_SUPABASE_URL`: Your Supabase project URL (format: `https://[project-id].supabase.co`)
- `VITE_SUPABASE_ANON_KEY`: Get from Supabase Dashboard → Settings → API

### Step 2: Deploy

Once environment variables are set:
1. Push to your main branch (or trigger a redeploy in Vercel)
2. Vercel will automatically build and deploy

### Step 3: Verify Deployment

Visit your Vercel deployment URL and try generating a workout. The app should successfully call the Supabase Edge Function.

### Environment Variables for Multiple Environments

For different environments (production, preview, development):
- **Production**: Set variables to be available in "Production" environment
- **Preview**: Optionally set different values for "Preview" deployments
- **Development**: Local `.env` file is used automatically

### Custom Domains

When adding a custom domain to Vercel:
1. No code changes needed - environment variables work across all domains
2. Ensure your domain is added in Vercel project settings
3. The app will continue to call the same Supabase Edge Function URL

### Troubleshooting Vercel Deployment

#### Build fails with "Command 'npm run build' exited with 2"
- Check build logs for TypeScript errors
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to reproduce

#### API calls show "undefined" in URL
- Environment variables are not set in Vercel
- Go to Project Settings → Environment Variables
- Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Redeploy after adding variables

#### CORS errors
- Verify the Supabase Edge Function has proper CORS headers
- Check that `Access-Control-Allow-Origin` is set (currently set to `*` for development)
- For production, consider restricting to your Vercel domain
