# 🚀 Deployment Guide for MovieCO

This guide will help you deploy your Angular MovieCO application to various platforms.

## 🔑 Prerequisites

1. **Get a TMDB API Token**
   - Go to [The Movie Database](https://www.themoviedb.org/settings/api)
   - Create an account and request an API key
   - Copy your API token

2. **Ensure your code is ready**
   - All changes are committed to your repository
   - No hardcoded API tokens in the source code
   - Environment variables are properly configured

## 📋 Deployment Options

### Option 1: Vercel (Recommended)

#### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your MovieCO repository

#### Step 2: Configure Environment Variables
1. In your Vercel project dashboard, go to Settings → Environment Variables
2. Add a new variable:
   - **Name**: `TMDB_API_TOKEN`
   - **Value**: `Bearer YOUR_ACTUAL_TOKEN_HERE`
   - **Environment**: Production, Preview, Development
3. Click "Save"

#### Step 3: Deploy
1. Vercel will automatically detect it's an Angular project
2. The build command is already configured in `vercel.json`
3. Click "Deploy"
4. Your app will be available at the provided URL

### Option 2: GitHub Pages

#### Step 1: Set up GitHub Secrets
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add:
   - **Name**: `TMDB_API_TOKEN`
   - **Value**: `Bearer YOUR_ACTUAL_TOKEN_HERE`
5. Click "Add secret"

#### Step 2: Enable GitHub Pages
1. Go to Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically deploy on pushes to main branch

#### Step 3: Deploy
1. Push your code to the main branch
2. Go to Actions tab to monitor the deployment
3. Once complete, your app will be available at `https://yourusername.github.io/your-repo-name`

### Option 3: Netlify

#### Step 1: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in and click "New site from Git"
3. Connect your GitHub repository

#### Step 2: Configure Build Settings
- **Build command**: `npm run build:prod`
- **Publish directory**: `docs`
- **Node version**: 18

#### Step 3: Set Environment Variables
1. Go to Site settings → Environment variables
2. Add:
   - **Key**: `TMDB_API_TOKEN`
   - **Value**: `Bearer YOUR_ACTUAL_TOKEN_HERE`
3. Click "Save"

#### Step 4: Deploy
1. Netlify will automatically build and deploy
2. Your app will be available at the provided URL

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Fails with API Token Error
**Problem**: `TMDB_API_TOKEN is not defined`
**Solution**: 
- Check that environment variable is set correctly
- Ensure the token format is `Bearer YOUR_TOKEN`
- Verify the token is valid and not expired

#### 2. Routing Issues (404 on refresh)
**Problem**: Direct URL access returns 404
**Solution**: 
- For Vercel: The `vercel.json` handles this automatically
- For Netlify: Create a `_redirects` file in the `docs` folder:
  ```
  /* /index.html 200
  ```

#### 3. Assets Not Loading
**Problem**: Images, fonts, or other assets not loading
**Solution**:
- Check that the `public` folder is properly configured in `angular.json`
- Verify asset paths are correct
- Ensure build output includes all assets

#### 4. CORS Issues
**Problem**: API calls failing due to CORS
**Solution**:
- TMDB API supports CORS, so this shouldn't be an issue
- If using a proxy, ensure it's configured correctly

### Debugging Steps

1. **Check Build Logs**
   - Look for specific error messages
   - Verify environment variables are being read
   - Check for missing dependencies

2. **Test Locally First**
   ```bash
   npm run build:prod
   npm install -g serve
   serve docs
   ```

3. **Verify Environment Variables**
   - Check that variables are set in your deployment platform
   - Ensure they're available during build time
   - Test with a simple console.log (remove after testing)

4. **Check API Token**
   - Verify the token is valid by testing with curl:
   ```bash
   curl -H "Authorization: Bearer YOUR_TOKEN" \
        "https://api.themoviedb.org/3/movie/popular"
   ```

## 📝 Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `TMDB_API_TOKEN` | TMDB API Bearer token | Yes | `Bearer eyJhbGciOiJIUzI1NiJ9...` |

## 🎯 Best Practices

1. **Never commit API tokens** to your repository
2. **Use environment variables** for all sensitive data
3. **Test locally** before deploying
4. **Monitor build logs** for errors
5. **Keep dependencies updated**
6. **Use HTTPS** for all API calls
7. **Implement proper error handling**

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the build logs in your deployment platform
3. Verify your TMDB API token is valid
4. Test the application locally first

---

**Happy Deploying! 🚀** 