# Blackrock Consultancy Website

A modern, multi-page website for Blackrock Consultancy - an overseas manpower recruitment agency.

## Project Structure

```
blackrockconsultancy/
├── components/          # Reusable HTML components
│   ├── header.html
│   └── footer.html
├── pages/              # Additional page files
├── styles/             # SCSS stylesheets
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _components.scss
│   ├── main.scss
│   └── main.css        # Compiled CSS
├── scripts/            # JavaScript files
│   ├── main.js
│   └── forms.js
├── api/                # API endpoint placeholders
│   ├── contact.js
│   ├── apply.js
│   └── newsletter.js
├── index.html          # Homepage
├── about.html
├── services.html
├── careers.html
├── clients.html
├── media.html
├── blog.html
├── contact.html
├── candidate-login.html
├── employer-portal.html
├── privacy.html
├── terms.html
├── package.json
└── README.md
```

## Features

- ✅ **12 Separate HTML Pages** - Each page is a standalone file
- ✅ **Mobile-First Responsive Design** - Works on all devices
- ✅ **SEO Optimized** - Meta tags, schema.org structured data, semantic HTML
- ✅ **Accessibility (WCAG)** - ARIA labels, skip links, keyboard navigation
- ✅ **Modern SCSS Architecture** - Variables, mixins, modular components
- ✅ **Professional Design** - Blue (#2764F3) and Black (#1A1B21) color scheme
- ✅ **Working Forms** - Contact, job application, and newsletter forms
- ✅ **WhatsApp Integration** - Floating chat button on all pages
- ✅ **Interactive Navigation** - Sticky header, mobile hamburger menu
- ✅ **Job Listings** - Filterable job board with application forms

## Tech Stack

- **HTML5** - Semantic markup
- **SCSS** - Modular styling with variables and mixins
- **JavaScript (Vanilla)** - Form handling and interactivity
- **Inter Font** - Modern sans-serif typography

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Compile SCSS to CSS:
```bash
npm run build-css
```

3. Watch for SCSS changes (development):
```bash
npm run watch-css
```

### Development

To view the website, you can use any static file server:

- **Python:**
```bash
python -m http.server 8000
```

- **Node.js (http-server):**
```bash
npx http-server
```

- **VS Code Live Server extension**

Then open `http://localhost:8000` in your browser.

## API Endpoints

The website includes placeholder API endpoints that need to be implemented on your backend:

- `/api/contact` - Contact form submission
- `/api/apply` - Job application submission
- `/api/newsletter` - Newsletter subscription

See the files in the `/api` directory for implementation examples.

## Customization

### Colors

Edit `styles/_variables.scss` to change the color scheme:

```scss
$brand-blue: #2764F3;
$brand-black: #1A1B21;
```

### Fonts

Change the font family in `styles/_variables.scss`:

```scss
$font-sans: 'Inter', system-ui, sans-serif;
```

### WhatsApp Number

Update the WhatsApp link in all HTML files:

```html
href="https://wa.me/YOUR_NUMBER?text=..."
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 Blackrock Consultancy. All rights reserved.

## Contact

For questions or support, contact:
- Email: info@blackrockconsultancy.com
- Phone: +91-9876543210
