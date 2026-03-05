# Biological Anthropology — Study App

React + Vite single-page study app for Biological Anthropology exam prep.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Publish with GitHub + Vercel

### 1) Create a local git repo (already done in this folder)

```bash
git init -b main
git add .
git commit -m "Initial commit"
```

### 2) Create a new GitHub repository

Create an empty repo on GitHub (for example: `anthro-study-app`) and copy its URL.

### 3) Link and push

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

### 4) Deploy on Vercel

1. Go to Vercel and click **Add New → Project**.
2. Import your GitHub repo.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Click **Deploy**.

After the first deploy, every push to `main` automatically redeploys.
