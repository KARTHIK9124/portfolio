# Karthik Raju - Professional Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my professional experience as a Software Developer specializing in Python, AWS Lambda, and serverless architectures.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Interactive Components**: Dynamic typing effect, counter animations, skill bars
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 📋 Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Professional summary with statistics
3. **Experience** - Work history timeline with achievements
4. **Skills** - Technical skills with progress bars
5. **Projects** - Portfolio of projects with filtering
6. **Certifications** - Education and professional certifications
7. **Contact** - Contact form and social links

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: Font Awesome 6.5.1
- **Fonts**: Inter, Space Grotesk (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/KARTHIK9124/portfolio-react.git
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🔧 Customization

### Update Your Information

All personal data is centralized in `src/data/portfolioData.js`. Update the following:

- **personalInfo**: Name, title, contact details, social links
- **roles**: Typing animation texts
- **about**: Professional summary and features
- **skills**: Frontend, backend, and tools
- **workExperience**: Job history and achievements
- **projects**: Portfolio projects
- **education**: Academic background
- **certifications**: Professional certifications
- **contact**: Contact information

### Add Your Images

Place your images in the `public` folder:
- Profile photo: `karthik.png`
- Project images: `project1.png`, `project2.png`, etc.
- Resume PDF: `Karthik Resume.pdf`

### Customize Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #14b8a6;
  /* ... more variables */
}
```

## 📱 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🚀 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://KARTHIK9124.github.io/portfolio-react",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify/Vercel

Simply connect your GitHub repository and these platforms will auto-deploy.

## 📄 Project Structure

```
portfolio-react/
├── public/              # Static assets
│   ├── karthik.png
│   ├── project images
│   └── resume.pdf
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── styles.css
│   ├── data/
│   │   └── portfolioData.js  # All content data
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Features Breakdown

### Dark/Light Mode
- Automatic theme persistence using localStorage
- Smooth transitions between themes
- Custom color schemes for each mode

### Animations
- Typing effect for role titles
- Counter animation for statistics
- Skill bar progress animations
- Scroll-triggered reveals
- Smooth scrolling navigation

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly interactions

## 📞 Contact

- **Email**: rajukarthik158@gmail.com
- **Phone**: +91 6382435343
- **LinkedIn**: [karthik--r](https://www.linkedin.com/in/karthik--r/)
- **GitHub**: [KARTHIK9124](https://github.com/KARTHIK9124)
- **Portfolio**: [karthik9124.github.io/portfolio](https://karthik9124.github.io/portfolio/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends 2026
- Icons by Font Awesome
- Fonts by Google Fonts

---

**Built with ❤️ by Karthik Raju**
