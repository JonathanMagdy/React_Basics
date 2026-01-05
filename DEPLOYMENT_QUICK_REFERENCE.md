# 🚀 Quick Deployment Reference Guide

Quick reference for deploying all 7 React projects to GitHub Pages.

## 📋 Universal Steps (Apply to Each Project)

### For Each Project:

1. **Navigate to project folder**
   ```bash
   cd "Project Name/project_folder"
   ```

2. **Install gh-pages**
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Update vite.config.js** - Add `base` property:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/REPOSITORY_NAME/",  // ⚠️ Must match GitHub repo name exactly
   })
   ```

4. **Update package.json** - Add deploy scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

5. **Initialize Git** (if not done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

6. **Create GitHub Repository**
   - Go to github.com/new
   - Create repository (match name with `base` in vite.config.js)
   - Don't initialize with README

7. **Connect and Push**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

8. **Deploy**
   ```bash
   npm run deploy
   ```

9. **Enable GitHub Pages**
   - GitHub → Settings → Pages
   - Source: **gh-pages** branch
   - Save

10. **Access Live Site**
    ```
    https://YOUR_USERNAME.github.io/REPO_NAME/
    ```

---

## 📦 Project-Specific Configuration

### 1. My First App
- **Folder**: `myfirstapp/myfirstapp/`
- **Base**: `"/myfirstapp/"`
- **Repo Name**: `myfirstapp`

### 2. Content Rating
- **Folder**: `Content Rating/content_rating/`
- **Base**: `"/content-rating/"`
- **Repo Name**: `content-rating`

### 3. Event Planner
- **Folder**: `Event Planner/event_planner/`
- **Base**: `"/event-planner/"`
- **Repo Name**: `event-planner`

### 4. Todo List
- **Folder**: `Todo List/todo_list/`
- **Base**: `"/todo-list/"`
- **Repo Name**: `todo-list`

### 5. Custom Hook
- **Folder**: `Custom Hook/custom_hook/`
- **Base**: `"/custom-hook/"`
- **Repo Name**: `custom-hook`

### 6. Feedback Form
- **Folder**: `Feedback Form/feedback_form/`
- **Base**: `"/feedback-form/"`
- **Repo Name**: `feedback-form`

### 7. E-Commerce
- **Folder**: `E-Commerce Data Rendering using Redux Toolkit/ecommerce_rtk/`
- **Base**: `"/ecommerce-rtk/"`
- **Repo Name**: `ecommerce-rtk`

---

## ⚡ Quick Commands Cheat Sheet

```bash
# Install gh-pages
npm install gh-pages --save-dev

# Build and deploy
npm run deploy

# Update after changes
git add .
git commit -m "Update"
git push origin main
npm run deploy
```

---

## ⚠️ Important Notes

1. **Base Path Must Match Repository Name**
   - Case-sensitive
   - Include leading `/` and trailing `/`
   - Example: `base: "/myfirstapp/"` for repo `myfirstapp`

2. **Repository Names**
   - Use lowercase
   - Use hyphens for spaces
   - Keep it short and descriptive

3. **Wait Time**
   - GitHub Pages takes 1-3 minutes to build
   - Be patient after deployment

4. **Troubleshooting**
   - 404 Error? Check `base` path matches repo name
   - Assets not loading? Verify trailing slash in `base`
   - Build errors? Test locally with `npm run build` first

---

## 🔗 Your Deployment URLs

Replace `YOUR_USERNAME` with your GitHub username:

- `https://YOUR_USERNAME.github.io/myfirstapp/`
- `https://YOUR_USERNAME.github.io/content-rating/`
- `https://YOUR_USERNAME.github.io/event-planner/`
- `https://YOUR_USERNAME.github.io/todo-list/`
- `https://YOUR_USERNAME.github.io/custom-hook/`
- `https://YOUR_USERNAME.github.io/feedback-form/`
- `https://YOUR_USERNAME.github.io/ecommerce-rtk/`

---

For detailed instructions, see the main README.md file.

