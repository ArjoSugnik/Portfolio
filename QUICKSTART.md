# 🚀 Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
cd sugnik-portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: `http://localhost:5173`

## ✏️ Customize Your Portfolio

### Update Your Information
Edit `src/data/portfolioData.js`:
- Add your LinkedIn URL
- Update email, GitHub username
- Modify skills, projects, hackathons
- Add more certifications

### Change Colors/Theme
Edit `tailwind.config.js` to customize colors and fonts

## 🌐 Deploy (Choose One)

### Vercel (Easiest)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy! ✨

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to https://app.netlify.com/drop
3. Done! 🎉

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
{
  "homepage": "https://ArjoSugnik.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Deploy:
npm run deploy
```

## 📝 Key Files to Edit

- `src/data/portfolioData.js` - All your personal information
- `src/index.css` - Global styles
- `tailwind.config.js` - Theme customization
- `index.html` - Page title and meta tags

## 🎨 Color Scheme

Current colors:
- Primary: Blue (#0ea5e9)
- Accent: Orange (#f59e0b)
- Dark: Slate (#0f172a)

Change these in `tailwind.config.js` under `theme.extend.colors`

## 💡 Tips

1. **GitHub API**: Your repos update automatically every time the page loads
2. **Images**: Add profile picture by putting it in `public/` folder
3. **Contact Form**: Currently shows success message - integrate with a backend service for real email functionality
4. **LinkedIn**: Add your LinkedIn URL in portfolioData.js

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- GitHub Issues: Report problems at your repository
- Contact: sugnik.11sc.2020@gmail.com

---

**Happy Coding! 🎉**
