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
1. Link your local project to Supabase (Project ID: yxmhsbpvlpvksoteigfj)
2. Set the GEMINI_API_KEY secret
3. Deploy the gemini-chat function

## Step 3: Test the Deployed Function

First, get your anon key from:
https://supabase.com/dashboard/project/yxmhsbpvlpvksoteigfj/settings/api

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
supabase link --project-ref yxmhsbpvlpvksoteigfj

# 3. Set secret (use environment variable)
export GEMINI_API_KEY='your_actual_api_key_here'
supabase secrets set GEMINI_API_KEY="$GEMINI_API_KEY"

# 4. Deploy function
supabase functions deploy gemini-chat
```

## Your Function URL

Once deployed, your function will be available at:
```
https://yxmhsbpvlpvksoteigfj.supabase.co/functions/v1/gemini-chat
```

## Quick Test

```bash
curl -X POST 'https://yxmhsbpvlpvksoteigfj.supabase.co/functions/v1/gemini-chat' \
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
- Check: https://supabase.com/dashboard/project/yxmhsbpvlpvksoteigfj/settings/api

### "GEMINI_API_KEY not configured"
- Verify the secret was set: `supabase secrets list`
- Re-run: `supabase secrets set GEMINI_API_KEY="your_key"`
