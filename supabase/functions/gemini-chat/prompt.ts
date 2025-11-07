// Prompt template with parameter interpolation and inlined context
import { EXERCISE_DATABASE_JSON } from "./exercise-database-data.ts";
import { EXERCISE_SELECTION_GUIDELINES } from "./exercise-selection-data.ts";

export interface PromptParams {
  splitText: string,
  style: string
  durationText: string,
  equipmentToUse: string[],
}

/**
 * Generate the prompt with interpolated parameters and inlined context
 * @param params - The parameters to interpolate into the prompt
 * @returns The final prompt string with exercise database and guidelines inlined
 */
export function getPrompt(params: PromptParams): string {
  // Full prompt with context inlined at the beginning (for implicit caching)
  return `# EXERCISE DATABASE

The following is a comprehensive exercise database in JSON format. Use ONLY exercises from this database when generating workouts.

${EXERCISE_DATABASE_JSON}

# EXERCISE SELECTION GUIDELINES

The following guidelines explain how to select exercises based on training style, split type, and volume recommendations.

${EXERCISE_SELECTION_GUIDELINES}

# WORKOUT GENERATION TASK

You are an expert fitness coach. Generate a complete workout based on these parameters:

WORKOUT PARAMETERS:
- Split: ${params.splitText}
- Training Style: ${params.style}
- Duration/Volume: ${params.durationText}
- Available Equipment: ${params.equipmentToUse.join(', ')}


INSTRUCTIONS:
1. Select exercises ONLY from the provided exercise database that match the available equipment
2. Follow the exercise selection guidelines for the specified training style
3. Structure the workout appropriately for the split type and duration
4. Include sets and reps appropriate for the training style
5. Order exercises optimally (typically compound movements first, then isolation)
6. Include rest periods between sets
7. For each exercise, include primary and secondary muscle targets using HUMAN-READABLE names:
   - Use proper capitalization (e.g., "Front delts", "Middle delts", "Triceps")
   - Use spaces instead of underscores (e.g., "Front delts" NOT "front_delts")
   - When listing multiple muscles, separate with commas (e.g., "Front delts, Middle delts")
   - Format muscle names as they would appear in a fitness app UI
8. Generate a complete structured workout based on these parameters`;
}

