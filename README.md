# MovieCO - Angular Movie Application

A modern Angular application for browsing movies and TV shows using the TMDB API.

## 🚀 Deployment Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- TMDB API Token

### Environment Variables

Before deploying, you need to set up your TMDB API token:

1. **Get your TMDB API token** from [The Movie Database](https://www.themoviedb.org/settings/api)
2. **Set the environment variable** in your deployment platform:

#### For Vercel:
- Go to your project settings in Vercel
- Add environment variable: `TMDB_API_TOKEN`
- Value: `Bearer YOUR_ACTUAL_TOKEN_HERE`

#### For GitHub Pages:
- Go to your repository settings
- Navigate to Secrets and variables → Actions
- Add repository secret: `TMDB_API_TOKEN`
- Value: `Bearer YOUR_ACTUAL_TOKEN_HERE`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build:prod
```

### Deployment

#### Vercel
1. Connect your GitHub repository to Vercel
2. Set the environment variable `TMDB_API_TOKEN`
3. Deploy automatically on push to main branch

#### GitHub Pages
1. Push your code to the main branch
2. The GitHub Action will automatically build and deploy
3. Make sure to set the `TMDB_API_TOKEN` secret in repository settings

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `src/app/environments/` - Environment configurations

## 📝 Important Notes

- **Never commit API tokens** to your repository
- Use environment variables for sensitive data
- The build output is in the `docs/` directory
- Make sure your TMDB API token is valid and has proper permissions

## 🛠️ Troubleshooting

If deployment fails:
1. Check that your TMDB API token is valid
2. Verify environment variables are set correctly
3. Check build logs for specific error messages
4. Ensure all dependencies are properly installed
