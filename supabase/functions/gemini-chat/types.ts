// Type definitions for Gemini API integration

// Request types
export interface ChatRequest {
  // Workout parameters
  splitText: string;
  style: string;
  durationText: string;
  equipmentToUse: string[];
  // Optional parameters
  temperature?: number; // 0.0 to 2.0
  maxTokens?: number;
}

// Gemini API types
export interface GeminiContent {
  role?: string;
  parts: { text: string }[];
}

export interface GeminiGenerationConfig {
  temperature?: number;
  topP?: number;
  topK?: number;
  maxOutputTokens?: number;
  responseMimeType?: string;
  responseSchema?: Record<string, unknown>;
}

export interface GeminiRequestBody {
  contents: GeminiContent[];
  generationConfig?: GeminiGenerationConfig;
  systemInstruction?: GeminiContent;
}

// Workout exercise structure
export interface WorkoutExercise {
  exerciseId: string;
  exerciseName: string;
  sets: number;
  reps: string;
  restPeriod: string;
  primaryTarget: string;
  secondaryTarget: string;
  description: string;
}

// Workout response structure
export interface WorkoutData {
  workoutName: string;
  totalEstimatedTime: string;
  exercises: WorkoutExercise[];
}

// Structured response schema for workout generation
export interface ChatResponseSchema {
  type: "object";
  properties: {
    workoutName: {
      type: "string";
      description: string;
    };
    totalEstimatedTime: {
      type: "string";
      description: string;
    };
    exercises: {
      type: "array";
      items: {
        type: "object";
        properties: Record<string, unknown>;
        required: string[];
      };
      description: string;
    };
  };
  required: string[];
}

// Response types
export interface ChatResponse {
  success: boolean;
  data?: WorkoutData;
  error?: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
  details?: unknown;
}
