// Supabase Edge Function: Gemini Workout Generator
// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { getPrompt } from "./prompt.ts";
import type {
  ChatRequest,
  ChatResponse,
  ChatResponseSchema,
  ErrorResponse,
  GeminiRequestBody,
} from "./types.ts";

const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta";
const GEMINI_MODEL = "gemini-2.5-flash-lite"; // Free tier with implicit caching support!

// Define workout response schema
const RESPONSE_SCHEMA: ChatResponseSchema = {
  type: "object",
  properties: {
    workoutName: {
      type: "string",
      description: "Descriptive name for the workout",
    },
    totalEstimatedTime: {
      type: "string",
      description: "Estimated total time for the workout (e.g., '45-50 minutes')",
    },
    exercises: {
      type: "array",
      items: {
        type: "object",
        properties: {
          exerciseId: {
            type: "string",
            description: "Exercise ID from the database",
          },
          exerciseName: {
            type: "string",
            description: "Name of the exercise",
          },
          sets: {
            type: "number",
            description: "Number of sets",
          },
          reps: {
            type: "string",
            description: "Rep range (e.g., '8-10', '12-15')",
          },
          restPeriod: {
            type: "string",
            description: "Rest time between sets (e.g., '90 seconds')",
          },
          primaryTarget: {
            type: "string",
            description: "Primary muscle targets (comma-separated)",
          },
          secondaryTarget: {
            type: "string",
            description: "Secondary muscle targets (comma-separated)",
          },
          description: {
            type: "string",
            description: "Exercise description from database",
          },
        },
        required: [
          "exerciseId",
          "exerciseName",
          "sets",
          "reps",
          "restPeriod",
          "primaryTarget",
          "secondaryTarget",
          "description",
        ],
      },
      description: "List of exercises in the workout",
    },
  },
  required: ["workoutName", "totalEstimatedTime", "exercises"],
};

// CORS headers for browser requests
// TODO: Restrict to your actual domain in production
// Example: "Access-Control-Allow-Origin": "https://yourdomain.com"
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // ⚠️ Consider restricting this
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation limits
const MAX_EQUIPMENT_ITEMS = 20;
const MAX_STRING_LENGTH = 200;

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get API key from environment
    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY not configured");
    }

    // Parse request body
    const requestBody: ChatRequest = await req.json();
    const {
      splitText,
      style,
      durationText,
      equipmentToUse,
      temperature,
      maxTokens,
    } = requestBody;

    // Validate required parameters
    if (!splitText || !style || !durationText || !equipmentToUse) {
      const error: ErrorResponse = {
        success: false,
        error:
          "Missing required fields: splitText, style, durationText, equipmentToUse",
      };
      return new Response(JSON.stringify(error), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Input validation
    if (
      splitText.length > MAX_STRING_LENGTH ||
      style.length > MAX_STRING_LENGTH ||
      durationText.length > MAX_STRING_LENGTH
    ) {
      const error: ErrorResponse = {
        success: false,
        error: "Input strings exceed maximum length",
      };
      return new Response(JSON.stringify(error), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!Array.isArray(equipmentToUse) || equipmentToUse.length === 0) {
      const error: ErrorResponse = {
        success: false,
        error: "equipmentToUse must be a non-empty array",
      };
      return new Response(JSON.stringify(error), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (equipmentToUse.length > MAX_EQUIPMENT_ITEMS) {
      const error: ErrorResponse = {
        success: false,
        error: `Too many equipment items (max: ${MAX_EQUIPMENT_ITEMS})`,
      };
      return new Response(JSON.stringify(error), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Generate the full prompt with inlined context
    console.log("Generating prompt with inlined context...");
    const prompt = getPrompt({
      splitText,
      style,
      durationText,
      equipmentToUse,
    });
    console.log(`✓ Prompt generated (${prompt.length} chars)`);

    // Build Gemini API request (simple structure)
    const geminiRequest: GeminiRequestBody = {
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: temperature ?? 1.0,
        maxOutputTokens: maxTokens ?? 2048,
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA,
      },
    };

    // Call Gemini API
    const modelPath = `models/${GEMINI_MODEL}`;
    const generateUrl = `${GEMINI_API_BASE}/${modelPath}:generateContent`;
    console.log(`Calling Gemini API: ${generateUrl}`);

    const geminiResponse = await fetch(generateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(geminiRequest),
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json();
      throw new Error(
        `Gemini API error: ${JSON.stringify(errorData)}`
      );
    }

    const geminiData = await geminiResponse.json();

    // Log usage metadata to see implicit cache hits
    if (geminiData.usageMetadata) {
      console.log("📊 Token usage:", {
        promptTokens: geminiData.usageMetadata.promptTokenCount,
        cachedTokens: geminiData.usageMetadata.cachedContentTokenCount || 0,
        responseTokens: geminiData.usageMetadata.candidatesTokenCount,
        totalTokens: geminiData.usageMetadata.totalTokenCount,
      });

      if (geminiData.usageMetadata.cachedContentTokenCount > 0) {
        console.log(`✅ Cache hit! Saved ${geminiData.usageMetadata.cachedContentTokenCount} tokens via implicit caching`);
      }
    }

    // Extract structured response
    const responseText =
      geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      throw new Error("No response from Gemini API");
    }

    // Parse the JSON response
    const structuredData = JSON.parse(responseText);

    // Build success response
    const response: ChatResponse = {
      success: true,
      data: structuredData,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);

    // Sanitize error message for security - don't expose internal details
    const errorResponse: ErrorResponse = {
      success: false,
      error: "An error occurred while generating the workout. Please try again.",
      // Don't include details in production to avoid information leakage
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

/* To invoke locally:

  1. Create a .env file at project root with your GEMINI_API_KEY
  2. Run `supabase functions serve gemini-chat --env-file .env`
  3. Make an HTTP request:

  # Generate a workout
  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/gemini-chat' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{
      "splitText": "Push/Pull/Legs",
      "style": "Hypertrophy",
      "durationText": "45-60 minutes",
      "equipmentToUse": ["barbell", "dumbbells", "bench", "cable_machine"]
    }'

  # Generate a workout with cache refresh
  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/gemini-chat' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{
      "splitText": "Upper/Lower",
      "style": "Strength",
      "durationText": "60-75 minutes",
      "equipmentToUse": ["barbell", "rack", "bench"],
      "refreshCache": true
    }'

*/
