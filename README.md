# EziHub Website

A modern, responsive website for EziHub - the verified credibility platform for the modern workforce.

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, professional interface with custom hero section
- **Fast Performance**: Built with Webpack for optimal loading
- **SEO Optimized**: Structured for search engine visibility
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Tailwind CSS
- **JavaScript**: Interactive functionality
- **Webpack**: Module bundling and optimization
- **PostCSS**: CSS processing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/olutosin007/ezihub.git
cd ezihub
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment

This project is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## ✅ Next Steps (Production Branch: Ezihub-prod-site-v1.0)

These are the recommended steps for the collaborator handling production deployment on a custom domain.

1. Checkout the production branch:
```bash
git fetch origin
git checkout Ezihub-prod-site-v1.0
```

2. Install dependencies and build:
```bash
npm install
npm run build
```

3. Deploy the contents of `build/` to your hosting:
- Static hosting (e.g., Netlify, S3/CloudFront, Nginx): serve the `build/` directory
- Vercel: set Build Command to `npm run build` and Output Directory to `build`

4. Map a custom domain:
- Add your domain in your hosting provider
- Point DNS (CNAME/A) to host as instructed by provider

5. Backend (Lead Capture) note:
- The site includes forms (waitlist, contact, newsletter)
- If using the lightweight Express + SQLite API locally, proxy is already configured at `/api` in `webpack.config.js`
- For production, deploy the API (e.g., Railway/Render/Fly.io) and update any endpoints if needed

6. Privacy Policy page:
- Available at `privacy.html`
- Footer link is already mapped

7. Temporarily disabled elements (MVP):
- Team section, header auth buttons, “How It Works” button, footer social icons, some footer columns
- Re-enable steps are documented in `docs/01-branding-and-styling/06-temp-disabled-items.md`

8. Admin & data access:
- See `docs/01-branding-and-styling/04-Admin-Usage.md` for viewing/exporting captured leads

9. QA checklist before go-live:
- Verify all pages load (home, privacy)
- Test forms submit successfully
- Validate favicon, metadata, social share tags
- Confirm custom domain and HTTPS work

## 📁 Project Structure

```
ezihub/
├── src/
│   ├── css/           # Stylesheets
│   ├── images/        # Image assets
│   ├── js/            # JavaScript files
│   └── *.html         # HTML pages
├── build/             # Production build output
├── docs/              # Documentation
└── public/            # Public assets
```

## 🎨 Customization

- **Colors**: Update CSS variables in `src/css/style.css`
- **Content**: Modify HTML files in `src/` directory
- **Images**: Replace images in `src/images/` directory

## 📄 License

© 2025 EziHub. All rights reserved.
