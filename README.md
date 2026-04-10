# BLACK ROCKS CONSULTANCY

**Connecting Skills with Global Opportunities**

A production-ready multipage website for BLACK ROCKS CONSULTANCY - Manpower Recruitment & Overseas Staffing.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React Icons**
- **Nodemailer** (contact form email)
- **TypeScript**

## Brand Colors

- Primary Red: `#E53935`
- Dark Gray / Black: `#1A1A1A`
- Secondary Gray: `#4A4A4A`
- Light Background: `#F7F7F7`
- White: `#FFFFFF`

## Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blackrockconsultancy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your SMTP credentials:
   ```
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-app-password
   EMAIL_FROM=your-email@example.com
   EMAIL_TO=info@blackrocksconsultancy.com
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Start production server**
   ```bash
   npm start
   ```

## Project Structure

```
blackrockconsultancy/
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/page.tsx
│   ├── process/page.tsx
│   ├── global-reach/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   ├── page.tsx                # Home
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageHeader.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── CoreValues.tsx
│       ├── Services.tsx
│       ├── Industries.tsx
│       ├── RecruitmentProcess.tsx
│       ├── GlobalReach.tsx
│       ├── ClientBenefits.tsx
│       ├── CandidateSupport.tsx
│       ├── CTASection.tsx
│       └── Contact.tsx
├── .env.example
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

1. Run `npm run build`
2. The output is in `.next` folder
3. Run `npm start` to serve the production build
4. Set `NEXT_PUBLIC_SITE_URL` to your production URL for sitemap/robots

### Environment Variables for Production

- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP port (587 for TLS)
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `EMAIL_FROM` - Sender email
- `EMAIL_TO` - Recipient email for contact form
- `NEXT_PUBLIC_SITE_URL` - Full site URL (e.g., https://www.blackrocksconsultancy.com)

## Features

- Sticky header with smooth scroll navigation
- Responsive mobile-first design (mobile, tablet, desktop)
- Contact form with API route (SMTP configurable)
- SEO metadata
- WhatsApp and Call buttons on contact section
- Google Maps embed
- Framer Motion animations and hover micro-interactions
- Upwork-inspired clean, professional UI

## Contact Form

The contact form requires valid SMTP configuration. Without it, the form will return a 500 error. Use a service like Gmail (with App Password), SendGrid, or Mailgun for production.

## License

MIT
