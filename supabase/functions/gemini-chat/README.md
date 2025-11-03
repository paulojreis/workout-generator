# Gemini Workout Generator Edge Function

A Supabase Edge Function that generates personalized workout plans using Google's Gemini 2.5 Flash Lite API.

## Features

### 1. AI-Powered Workout Generation
- Generates complete workouts based on:
  - Training split (Push/Pull/Legs, Full Body, etc.)
  - Training style (Hypertrophy, Strength, etc.)
  - Duration (30-90 minutes)
  - Available equipment
- Selects exercises from comprehensive database (285+ exercises)
- Follows evidence-based training guidelines (Renaissance Periodization)

### 2. Structured JSON Output
- Guaranteed JSON response format with schema validation
- Returns:
  - `workoutName`: Descriptive workout title
  - `totalEstimatedTime`: Duration estimate
  - `exercises`: Array of exercises with sets, reps, rest periods

### 3. Inlined Context
- Exercise database and training guidelines included in each request
- ~28,500 tokens of context per request
- No caching complexity (not available on free tier)

### 4. Security & Error Handling
- Comprehensive input validation
- Sanitized error messages
- CORS support
- Rate limiting via Supabase (15 RPM on free tier)
- Uses legacy API keys for automatic JWT verification
- See [SECURITY.md](../../../SECURITY.md) for detailed security practices and API key decisions

## Setup

### Prerequisites
- Supabase CLI installed
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Create environment file at project root**
   ```bash
   cp .env.example .env
   ```

2. **Add your API keys to `.env`**
   ```bash
   GEMINI_API_KEY=your_actual_api_key_here
   SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. **Test locally**
   ```bash
   supabase functions serve gemini-chat --env-file .env
   ```

4. **Deploy to Supabase**
   ```bash
   # Set secret in Supabase project
   supabase secrets set GEMINI_API_KEY=your_actual_api_key_here

   # Deploy function
   supabase functions deploy gemini-chat
   ```

## Usage

### API Endpoint

**Local Development:**
```
POST http://127.0.0.1:54321/functions/v1/gemini-chat
```

**Production:**
```
POST https://your-project.supabase.co/functions/v1/gemini-chat
```

### Request Format

```typescript
{
  "prompt": string;           // Required: Your question/prompt
  "cacheFiles"?: string[];    // Optional: Array of file contents to cache
  "refreshCache"?: boolean;   // Optional: Force cache refresh
  "temperature"?: number;     // Optional: 0.0-2.0, default 1.0
  "maxTokens"?: number;       // Optional: Max output tokens, default 2048
}
```

### Response Format

```typescript
{
  "success": true,
  "data": {
    "answer": string,
    "confidence": "high" | "medium" | "low",
    "sources"?: string[]
  },
  "cacheInfo"?: {
    "cacheName": string,
    "expiresAt": string
  }
}
```

## Examples

### 1. Simple Query (No Cache)

```bash
curl -X POST 'http://127.0.0.1:54321/functions/v1/gemini-chat' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "What is TypeScript?"
  }'
```

### 2. Query with File Context (Creates Cache)

```bash
curl -X POST 'http://127.0.0.1:54321/functions/v1/gemini-chat' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "Based on the documentation, explain how to set up a React project",
    "cacheFiles": [
      "React Setup Guide: First install Node.js version 18 or higher. Then run: npm create vite@latest my-app -- --template react-ts",
      "React follows a component-based architecture. Each component is a reusable piece of UI that manages its own state."
    ]
  }'
```

### 3. Reusing Cache

The function automatically reuses the most recent non-expired cache:

```bash
curl -X POST 'http://127.0.0.1:54321/functions/v1/gemini-chat' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "What are the best practices mentioned in the docs?"
  }'
```

### 4. JavaScript/TypeScript Client

```typescript
const response = await fetch('YOUR_FUNCTION_URL/gemini-chat', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'Explain the key concepts from the documentation',
    cacheFiles: [
      fileContent1,
      fileContent2,
    ],
    temperature: 0.7,
  }),
});

const data = await response.json();

if (data.success) {
  console.log('Answer:', data.data.answer);
  console.log('Confidence:', data.data.confidence);
  console.log('Sources:', data.data.sources);
}
```

## Configuration

### Customizing the Response Schema

Edit the `RESPONSE_SCHEMA` in `index.ts` to customize the structured output:

```typescript
const RESPONSE_SCHEMA: ChatResponseSchema = {
  type: "object",
  properties: {
    // Add your custom properties here
    summary: {
      type: "string",
      description: "Brief summary"
    },
    details: {
      type: "array",
      items: { type: "string" }
    }
  },
  required: ["summary"]
};
```

### Changing the Model

Update `GEMINI_MODEL` in `index.ts`:

```typescript
const GEMINI_MODEL = "gemini-2.5-pro-002"; // For more capable model
```

**Note:** Gemini 2.5 Pro requires minimum 4,096 tokens for caching vs 1,024 for Flash.

### Cache TTL

Adjust cache duration in `index.ts`:

```typescript
const cache = await cacheManager.createCache(cacheFiles, 86400); // 24 hours
```

## Architecture

### Files

- `index.ts` - Main function handler
- `cache-manager.ts` - Gemini API cache management
- `types.ts` - TypeScript type definitions
- `.env.example` - Environment variable template

### Flow

1. Request received with prompt and optional cache files
2. If cache files provided → Create new cache with files
3. If no cache files → Attempt to reuse existing cache
4. Call Gemini API with prompt and cache reference
5. Return structured JSON response

### Cost Optimization

- **Cached tokens**: 90% discount (Gemini 2.5) or 75% (Gemini 2.0)
- **Cache reuse**: Subsequent requests only pay for new prompt tokens
- **Example**: 10,000 token context file
  - First request: ~$0.10
  - Subsequent 100 requests: ~$0.01 (100x cheaper!)

## Troubleshooting

### "GEMINI_API_KEY not configured"
- Ensure `.env` file exists with valid key for local development
- For production, set secret: `supabase secrets set GEMINI_API_KEY=...`

### "Minimum token count not met"
- Cache requires 1,024+ tokens for Flash, 4,096+ for Pro
- Combine multiple files or add more content

### "Cache expired"
- Caches expire after TTL
- Function automatically creates new cache or reuses valid ones

### CORS errors
- The function includes CORS headers for browser requests
- Ensure your client includes proper Authorization header

## Development

### Local Testing

```bash
# Start Supabase (if not already running)
supabase start

# Serve function
supabase functions serve gemini-chat --env-file supabase/functions/gemini-chat/.env

# In another terminal, test with curl
curl -X POST 'http://127.0.0.1:54321/functions/v1/gemini-chat' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  -H 'Content-Type: application/json' \
  -d '{"prompt":"Hello Gemini!"}'
```

### Viewing Logs

```bash
# View function logs
supabase functions logs gemini-chat
```

## Resources

- [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
- [Context Caching Guide](https://ai.google.dev/gemini-api/docs/caching)
- [Structured Output Guide](https://ai.google.dev/gemini-api/docs/structured-output)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)

## License

MIT
