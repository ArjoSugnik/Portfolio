# Sugnik Tarafder - Portfolio Website

A modern, professional portfolio website showcasing IT Project Management, PMO, QA expertise, and Software Development skills.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **GitHub Integration**: Dynamically fetches latest repositories from GitHub
- **Interactive Components**: Sticky navigation, smooth scrolling, hover effects
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with CTA buttons
2. **About**: Professional background and highlights
3. **Skills**: Categorized skill sets (Project Management, QA, Tools, Technical)
4. **Projects**: Featured projects and GitHub repositories
5. **Hackathons**: Timeline of hackathon experiences with achievements
6. **Education & Certifications**: Academic background and professional certifications
7. **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Archivo Black, JetBrains Mono)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm

### Setup Steps

1. **Clone or download the repository**
   ```bash
   cd sugnik-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🔧 Configuration

### Update Personal Information

Edit `src/data/portfolioData.js` to customize:

- Personal details (name, email, location)
- Skills and expertise
- Project information
- Hackathon achievements
- Education details
- Certifications
- GitHub username for API integration

### Customize Theme

Edit `tailwind.config.js` to modify:

- Color schemes
- Font families
- Animation timings
- Breakpoints

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deployment Options

#### 1. **Vercel** (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

#### 2. **Netlify**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to Netlify's web interface.

#### 3. **GitHub Pages**

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Install gh-pages:
```bash
npm install --save-dev gh-pages
npm run deploy
```

#### 4. **Other Platforms**

The built files in `dist` can be deployed to any static hosting service:
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages
- Render
- Railway

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization Guide

### Changing Colors

1. Open `tailwind.config.js`
2. Modify the `colors` section under `theme.extend`
3. Update gradient classes in components as needed

### Adding Sections

1. Create new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Modifying Animations

Edit animation classes in `tailwind.config.js` and apply them using Tailwind's animation utilities.

## 📝 Project Structure

```
sugnik-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Hackathons.jsx
│   │   ├── EducationCertifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🔍 SEO Optimization

The site includes:
- Semantic HTML5 elements
- Proper heading hierarchy
- Meta descriptions
- Open Graph tags (add to `index.html` if needed)
- Fast load times

### Adding Meta Tags

Edit `index.html` to add:
```html
<meta property="og:title" content="Sugnik Tarafder - Portfolio">
<meta property="og:description" content="IT Project Management & Software Development Portfolio">
<meta property="og:image" content="URL_TO_YOUR_IMAGE">
<meta name="twitter:card" content="summary_large_image">
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### GitHub API Rate Limiting
The GitHub API allows 60 requests per hour for unauthenticated requests. For more requests, add a GitHub token.

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Sugnik Tarafder**
- Email: sugnik.11sc.2020@gmail.com
- GitHub: [@ArjoSugnik](https://github.com/ArjoSugnik)

---

Built with ❤️ using React and Tailwind CSS
