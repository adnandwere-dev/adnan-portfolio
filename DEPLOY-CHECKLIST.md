# Adnan Portfolio — Final Deployment Checklist

## 1. Local secrets
Keep `.env.local` on your machine only. It is intentionally excluded from Git.

Required variable:

```env
GEMINI_API_KEY=your_real_key_here
```

## 2. Before GitHub

```bash
npm install
npm run lint
npm run build
```

## 3. Git

```bash
git init
git add .
git commit -m "Prepare portfolio for deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 4. Vercel

Import the GitHub repository and add:

`GEMINI_API_KEY` = your real Gemini API key

Then deploy.

## 5. After deployment

Test:
- `/`
- `/chat`
- `/resume`
- AI chat request
- CV download
- Resume AR/EN toggle
- Email link
- GitHub link
- Project demo links
- Mobile layout

## Project links still to fill

The project card intentionally does not invent repository/demo URLs. Add the real URLs in:

`app/data/Projects.js`

Replace `demo: "#"` and `github: "#"` with the real URLs when each project is available.
