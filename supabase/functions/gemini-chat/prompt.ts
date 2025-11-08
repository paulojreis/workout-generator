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

You are an expert fitness coach. Generate a workout based on these parameters:

CRITICAL: The equipment constraint is ABSOLUTE. It is better to generate a shorter workout with only available exercises than to include exercises requiring unavailable equipment.

WORKOUT PARAMETERS:
- Split: ${params.splitText}
- Training Style: ${params.style}
- Duration/Volume: ${params.durationText}
- Available Equipment: ${params.equipmentToUse.join(', ')}


INSTRUCTIONS:
1. CRITICAL EQUIPMENT CONSTRAINT: ${params.equipmentToUse.includes('any') ? 'All equipment types are available. You may select any exercise from the database.' : `You MUST filter exercises by equipment before selecting them. For each exercise you consider:
   - Check its "equipment" array in the database
   - Verify that EVERY item in the exercise's equipment array appears in this available equipment list: [${params.equipmentToUse.join(', ')}]
   - If the exercise requires even ONE piece of equipment not in the available list, you MUST exclude it
   - Example: If available equipment is [dumbbells, bench] and an exercise requires [barbell, bench, rack], you MUST NOT include it because barbell and rack are not available
   - ONLY select exercises where ALL required equipment is available
   - IMPORTANT: When there are very few exercises matching the equipment (e.g., 5 or fewer), you MUST include ALL of them in the workout to maximize variety. Do not skip exercises just because they seem like "accessory" movements or don't perfectly fit a traditional workout structure.`}
2. CRITICAL: Use exercises EXACTLY as they appear in the database:
   - Copy the exercise "id" and "name" fields EXACTLY without modification
   - DO NOT rename exercises (e.g., do NOT change "Back Squat" to "Band Squat")
   - DO NOT modify exercise names to match equipment
   - If an exercise doesn't match the equipment constraint, EXCLUDE it entirely - do not try to adapt it
   - Only include exercises that genuinely exist in the database with matching equipment
3. Follow the exercise selection guidelines for the specified training style
4. Structure the workout appropriately for the split type and duration
5. Include sets and reps appropriate for the training style
6. Order exercises optimally (typically compound movements first, then isolation)
7. Include rest periods between sets with abbreviated units:
   - Use "sec" for seconds (e.g., "30 sec", "45 sec")
   - Use "min" for minutes (e.g., "1 min", "2 min")
   - Convert seconds to minutes when appropriate (60 seconds = 1 min, 90 seconds = 1.5 min, 120 seconds = 2 min)
   - Use the most concise format (prefer "2 min" over "120 sec")
8. For each exercise, include primary and secondary muscle targets using HUMAN-READABLE names:
   - Use proper capitalization (e.g., "Front delts", "Middle delts", "Triceps")
   - Use spaces instead of underscores (e.g., "Front delts" NOT "front_delts")
   - When listing multiple muscles, separate with commas (e.g., "Front delts, Middle delts")
   - Format muscle names as they would appear in a fitness app UI
9. Generate a structured workout based on these parameters
   - When equipment is limited and there are few matching exercises, include ALL available exercises that match the equipment constraint to maximize workout variety and volume
   - It's better to include all available exercises (even if some are accessory movements) than to have a very short workout
   - NEVER violate the equipment constraint to make the workout longer or more "complete"
   - Quality and correctness of equipment matching is more important than workout length`;
}

