# Deploy Valentine App
Write-Host "❤️ Building Valentine App..."
cd valentine-app
npm install
npm run build

Write-Host "🚀 Starting Vercel Deployment..."
Write-Host "⚠️  If asked to log in, please select 'Continue with Email' or 'GitHub' and follow the browser prompts."
Write-Host "⚠️  Press ENTER to accept default settings (Project Name, Directory, etc.)"

npx vercel --prod

Write-Host "✅ Done! Send the link above to your Valentine!"
Pause
