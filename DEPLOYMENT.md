# Wedding Invitation Website - Deployment Guide

## ✅ Code Pushed to GitHub
Your code is now on GitHub at: https://github.com/tanzils-origin/weddinginvite

## 🚀 Deployment Options

### Option 1: Deploy to Vercel (Recommended - Free & Easy)

**Vercel is the easiest option for React apps. It auto-deploys on every push!**

1. **Go to Vercel**: https://vercel.com
2. **Sign up** with your GitHub account
3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select `weddinginvite` repository
   - Framework: Automatic (or select React)
   - Root Directory: `app/frontend`
   - Click "Deploy"

Your site will be live in ~2 minutes at: `https://weddinginvite.vercel.app`

**Auto-deployment**: Every time you push to GitHub, it automatically rebuilds!

---

### Option 2: Deploy to GitHub Pages

1. **Add to package.json**:
```json
"homepage": "https://tanzils-origin.github.io/weddinginvite"
```

2. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

3. **Add deploy scripts** to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. **Deploy**:
```bash
npm run deploy
```

Your site will be at: `https://tanzils-origin.github.io/weddinginvite`

---

### Option 3: Deploy to Netlify (Free & Simple)

1. **Go to Netlify**: https://netlify.com
2. **Drag & drop** the `dist` folder, OR
3. **Connect GitHub** for auto-deployment
4. **Build settings**:
   - Build command: `cd app/frontend && npm run build`
   - Publish directory: `app/frontend/dist`

---

## 📦 Build & Deploy Locally

To build and test locally:

```bash
cd app/frontend
npm run build
# Output is in the dist/ folder
```

---

## 🎯 Current Status

✅ Code committed and pushed to GitHub  
✅ Production build created (`dist/` folder)  
✅ Ready for deployment to any platform

---

## 🔍 Quick Checklist Before Going Live

- [ ] Test on mobile devices
- [ ] Verify Google Maps iframes load correctly
- [ ] Test scratch card functionality
- [ ] Check countdown timer accuracy
- [ ] Verify background music loads (or replace with your audio)
- [ ] Test on multiple browsers
- [ ] Responsive design looks good on all screen sizes

---

## 🆘 Support

If you need to update the site later:

1. Make changes locally
2. Commit: `git add . && git commit -m "Your message"`
3. Push: `git push origin main`
4. Vercel/GitHub Pages will auto-deploy! ✨

---

*Last Updated: April 8, 2026*
