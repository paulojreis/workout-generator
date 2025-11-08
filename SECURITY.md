# Security Best Practices

This document outlines the security measures implemented in this Supabase Edge Function project.

## ✅ Implemented Security Measures

### 1. **Environment Variable Management**
- ✅ API keys are **never** hardcoded in source files
- ✅ Secrets are stored in environment variables
- ✅ `.env` files are excluded from git via `.gitignore`
- ✅ `.env.example` provided as template (without actual secrets)

### 2. **Input Validation**
- ✅ Required field validation for all parameters
- ✅ String length limits (max 200 characters)
- ✅ Array size limits (max 20 equipment items)
- ✅ Type checking for arrays

### 3. **Error Handling**
- ✅ Sanitized error messages (no internal details exposed)
- ✅ Generic error responses to prevent information leakage
- ✅ Detailed errors logged server-side only

### 4. **Supabase Security**
- ✅ API keys stored in Supabase Secrets Manager
- ✅ Edge function uses Supabase authentication
- ✅ CORS headers configured (review for production)

## ⚠️ Additional Recommendations

### For Production Deployment:

#### 1. **Restrict CORS**
Currently set to `"*"` (any domain). Update in `index.ts`:

```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://yourdomain.com", // Your actual domain
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
```

#### 2. **Enable Rate Limiting**
Supabase doesn't have built-in rate limiting for Edge Functions. Consider:
- Using Supabase's upcoming rate limiting features
- Implementing custom rate limiting with Redis/Upstash
- Using Cloudflare in front of your function

#### 3. **Monitor API Usage**
- Set up billing alerts for Gemini API usage
- Monitor function invocation counts
- Set up logging/alerting for errors

#### 4. **Row Level Security (RLS)**
If you add database operations:
- Enable RLS on all tables
- Create appropriate policies for user access
- Never expose service role key to clients

#### 5. **Gemini API Key Security**
- Rotate API keys periodically
- Set up API key restrictions in Google Cloud Console:
  - Restrict to specific APIs (Gemini only)
  - Set up application restrictions
  - Monitor usage quotas

#### 6. **API Usage & Rate Limits**
- Each request includes ~28,500 tokens of context (exercise database + guidelines)
- Free tier limits: **15 requests per minute (RPM)**
- Context is inlined in each request for simplicity
- Monitor usage to avoid hitting rate limits

#### 7. **API Key Type Decision: Legacy vs New**

**Current Choice: Legacy API Keys (anon/service_role)** ✅

**Why we're using legacy keys:**
- Edge Functions **only support automatic JWT verification** with legacy keys
- New keys (`sb_publishable_...` / `sb_secret_...`) require custom auth implementation in Edge Functions
- For our use case, rotation complexity is manageable
- Simpler = fewer security mistakes

**Legacy Key Format:**
- `anon` key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (JWT-based)
- Automatically verified by Supabase Edge Functions
- Can be used client-side (public)

**When to reconsider migrating to new keys:**
1. Supabase announces full Edge Function support for new key format
2. Need frequent key rotation without downtime
3. Building multiple services requiring independent keys
4. Deploying mobile apps where forced rotation causes user downtime

**References:**
- [Supabase API Keys Documentation](https://supabase.com/docs/guides/api/api-keys)
- [GitHub Discussion on API Key Changes](https://github.com/orgs/supabase/discussions/29260)

## 🚨 Key Rotation

If any key is exposed (committed to git, shared publicly, etc.):

### **Anon Key (Public)**
- Dashboard: Supabase Dashboard → Your Project → Settings → API
- Click "Reset" next to anon/public key
- Update in your local environment: `export SUPABASE_ANON_KEY='new_key'`
- Low urgency (it's meant to be public, but rotation prevents abuse)

### **Gemini API Key (Private)**
1. Go to: https://makersuite.google.com/app/apikey
2. Delete the compromised key
3. Create a new key
4. Update: `export GEMINI_API_KEY='new_key'`
5. Redeploy: `./deploy.sh`
6. **High urgency** (can incur costs)

### **Service Role Key (NEVER expose)**
- If exposed: Immediately reset in Supabase dashboard
- **Critical urgency** (has admin access to your database)

## 🔒 Secret Management

### Deployment Process:

1. **Set environment variable locally:**
   ```bash
   export GEMINI_API_KEY='your_actual_key'
   ```

2. **Deploy (script will use environment variable):**
   ```bash
   ./deploy.sh
   ```

3. **The deploy script securely sets the secret in Supabase:**
   ```bash
   supabase secrets set GEMINI_API_KEY="$GEMINI_API_KEY"
   ```

### Never:
- ❌ Commit API keys to git
- ❌ Share API keys in chat/email
- ❌ Hardcode secrets in source files
- ❌ Expose service role keys to clients

## 📋 Security Checklist

Before going to production:

- [ ] Remove `GEMINI_API_KEY` from any commit history
- [ ] Update CORS to your actual domain
- [ ] Set up rate limiting
- [ ] Enable Supabase billing alerts
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Review and test all input validation
- [ ] Set up API key restrictions in Google Cloud
- [ ] Document incident response procedures

## 🔄 Regular Security Tasks

- **Monthly:** Review Supabase logs for anomalies
- **Quarterly:** Rotate API keys
- **As needed:** Update dependencies for security patches

## 📞 Reporting Security Issues

If you discover a security vulnerability, please:
1. Do NOT open a public issue
2. Email the maintainer directly
3. Provide details and reproduction steps
4. Allow time for a fix before disclosure
