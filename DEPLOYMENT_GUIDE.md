# Deployment Guide: Alex Carter Portfolio

This guide will help you deploy the Alex Carter portfolio website to Netlify.

## Prerequisites

- Netlify account (https://netlify.com)
- GitHub (or Git) repository (optional, but recommended)

## Steps

### 1. Build the Project

Open your terminal in the project root and run:

    npm run build

This creates a `dist` folder with the production build.

### 2. Deploy to Netlify

#### Option A: Drag & Drop

1. Go to https://app.netlify.com and log in.
2. Click "Add new site" > "Deploy manually".
3. Drag the `dist` folder into the upload area.

#### Option B: Connect to GitHub

1. Push your project to a GitHub repository.
2. In Netlify, click "Add new site" > "Import an existing project".
3. Connect your GitHub account and select your repo.
4. Set the build command to `npm run build` and the publish directory to `dist`.
5. Click "Deploy site".

### 3. Domain Setup

- Use Netlify’s free subdomain or add a custom domain in Site settings > Domain management.

### 4. Environment Variables (if needed)

- Add any required environment variables in Site settings > Environment variables.

### 5. Done!

- Your site will be live at the provided Netlify URL.

---

_For more help, see Netlify’s docs: https://docs.netlify.com/_
