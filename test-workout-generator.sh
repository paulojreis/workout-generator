#!/bin/bash
# Test script for Gemini Workout Generator Edge Function (Production)

PROJECT_ID="yxmhsbpvlpvksoteigfj"
API_URL="https://${PROJECT_ID}.supabase.co/functions/v1/gemini-chat"

# Load environment variables from .env file if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Check if anon key is provided
if [ -z "$SUPABASE_ANON_KEY" ]; then
    echo "⚠️  Please set your SUPABASE_ANON_KEY environment variable"
    echo ""
    echo "Get it from: https://supabase.com/dashboard/project/${PROJECT_ID}/settings/api"
    echo ""
    echo "Then either:"
    echo "1. Add it to .env file: SUPABASE_ANON_KEY='your_anon_key_here'"
    echo "2. Export it: export SUPABASE_ANON_KEY='your_anon_key_here'"
    echo ""
    exit 1
fi

AUTH_TOKEN="Bearer $SUPABASE_ANON_KEY"

echo "=========================================="
echo "Testing Gemini Workout Generator"
echo "=========================================="
echo ""
echo "API URL: $API_URL"
echo ""

# Test 1: Generate a Push day workout
echo "Test 1: Push Day Workout (Hypertrophy)"
echo "--------------------------------------"
curl -s -X POST "$API_URL" \
  -H "Authorization: $AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "splitText": "Push (Chest, Shoulders, Triceps)",
    "style": "Hypertrophy",
    "durationText": "60 minutes",
    "equipmentToUse": ["barbell", "dumbbells", "bench", "cable_machine", "machines"]
  }' | jq '.'

echo -e "\n"

# Test 2: Generate a Pull day workout
echo "Test 2: Pull Day Workout (Strength)"
echo "--------------------------------------"
curl -s -X POST "$API_URL" \
  -H "Authorization: $AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "splitText": "Pull (Back, Biceps)",
    "style": "Strength",
    "durationText": "75 minutes",
    "equipmentToUse": ["barbell", "dumbbells", "pull_up_bar", "cable_machine", "rack"]
  }' | jq '.'

echo -e "\n"

# Test 3: Generate a Leg day workout
echo "Test 3: Leg Day Workout (Hypertrophy)"
echo "--------------------------------------"
curl -s -X POST "$API_URL" \
  -H "Authorization: $AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "splitText": "Legs (Quads, Hamstrings, Glutes, Calves)",
    "style": "Hypertrophy",
    "durationText": "90 minutes",
    "equipmentToUse": ["barbell", "dumbbells", "rack", "machines", "bench"]
  }' | jq '.'

echo -e "\n"

# Test 4: Generate a bodyweight home workout
echo "Test 4: Home Workout (Bodyweight Only)"
echo "--------------------------------------"
curl -s -X POST "$API_URL" \
  -H "Authorization: $AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "splitText": "Full Body",
    "style": "Hypertrophy",
    "durationText": "45 minutes",
    "equipmentToUse": ["bodyweight", "pull_up_bar"]
  }' | jq '.'

echo -e "\n"
echo "=========================================="
echo "Tests complete!"
echo "=========================================="
