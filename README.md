# Personal Portfolio - Next.js

This is a Next.js conversion of the personal portfolio website.

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── HomeSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── ContactSection.tsx
│   ├── Sidebar.tsx         # Right sidebar with profile
│   ├── ThemeToggle.tsx     # Dark/Light theme toggle
│   ├── Navigation.tsx      # Navigation menu
│   ├── ModalBox.tsx        # Modal for portfolio items
│   └── Footer.tsx          # Footer component
├── public/
│   ├── img/                # Images
│   └── svg/                # SVG icons
└── css/                    # Original CSS files (imported in globals.css)
```

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Dark/Light theme toggle with localStorage persistence
- ✅ Responsive design
- ✅ Image optimization with Next.js Image component
- ✅ Swiper.js for carousels/sliders
- ✅ React Typed for animated text
- ✅ Formspree integration for contact form
- ✅ SEO optimized with metadata

## Migration Notes

### Completed
- Basic structure and layout
- Theme toggle functionality
- Home, About, Contact sections
- Portfolio section with sliders
- Contact form with Formspree

### Still Using Original CSS
The project currently imports the original CSS files. You may want to:
- Convert to CSS Modules or styled-components
- Remove jQuery dependencies gradually
- Replace Owl Carousel with Swiper (partially done)

### jQuery Dependencies
Some features still rely on jQuery for:
- Modal functionality
- Navigation menu
- Magic cursor
- Background image initialization

These can be gradually replaced with React equivalents.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

