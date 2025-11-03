#!/bin/bash
# Deployment script for Gemini Chat Edge Function

set -e  # Exit on error

echo "=========================================="
echo "Supabase Edge Function Deployment"
echo "=========================================="
echo ""

PROJECT_ID="yxmhsbpvlpvksoteigfj"

# Load environment variables from .env file if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Check if GEMINI_API_KEY is set in environment
if [ -z "$GEMINI_API_KEY" ]; then
    echo "⚠️  Please set your GEMINI_API_KEY environment variable"
    echo ""
    echo "Then either:"
    echo "1. Add it to .env file: GEMINI_API_KEY='your_api_key_here'"
    echo "2. Export it: export GEMINI_API_KEY='your_api_key_here'"
    echo ""
    exit 1
fi

# Step 1: Link to Supabase project
echo "Step 1: Linking to Supabase project..."
supabase link --project-ref $PROJECT_ID

if [ $? -eq 0 ]; then
    echo "✓ Successfully linked to project"
else
    echo "✗ Failed to link to project"
    exit 1
fi

echo ""

# Step 2: Set Gemini API key secret
echo "Step 2: Setting GEMINI_API_KEY secret..."
supabase secrets set GEMINI_API_KEY="$GEMINI_API_KEY"

if [ $? -eq 0 ]; then
    echo "✓ Secret set successfully"
else
    echo "✗ Failed to set secret"
    exit 1
fi

echo ""

# Step 3: Deploy the function
echo "Step 3: Deploying gemini-chat function..."
supabase functions deploy gemini-chat

if [ $? -eq 0 ]; then
    echo "✓ Function deployed successfully"
else
    echo "✗ Failed to deploy function"
    exit 1
fi

echo ""
echo "=========================================="
echo "Deployment Complete!"
echo "=========================================="
echo ""
echo "Your function is now live at:"
echo "https://${PROJECT_ID}.supabase.co/functions/v1/gemini-chat"
echo ""
echo "Test it with:"
echo "curl -X POST 'https://${PROJECT_ID}.supabase.co/functions/v1/gemini-chat' \\"
echo "  -H 'Authorization: Bearer YOUR_ANON_KEY' \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -d '{\"prompt\":\"Hello Gemini!\"}'"
echo ""
