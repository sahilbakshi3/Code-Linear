# N7 – The New Foundation of Modern Banking

A production-quality React landing page implementation based on the N7 fintech Figma design.

## Tech Stack

- **Vite** + **React.js**
- **Vanilla CSS** (no Tailwind)
- **React Icons**
- Google Fonts: Inter + Syne

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable components
│   ├── Navbar.jsx    # Navigation with dropdowns
│   ├── Marquee.jsx   # Scrolling ticker
│   └── Footer.jsx    # Site footer
├── sections/         # Page sections
│   ├── Hero.jsx      # Hero section with banking mockups
│   ├── Solutions.jsx # Solutions grid
│   ├── CloudBanking.jsx # Cloud banking panels
│   ├── DigitalBanking.jsx # Digital banking features
│   ├── CTABanner.jsx # Call-to-action banner
│   ├── Insights.jsx  # Blog/insights section
│   └── CaseStudies.jsx # Case studies carousel
├── styles/
│   ├── globals.css   # CSS variables + global styles
│   └── buttons.css   # Button component styles
├── App.jsx           # Root component
└── main.jsx          # Entry point
```

## Design Highlights

- **Dark fintech aesthetic** matching the Figma design precisely
- **Responsive layout** working on all screen sizes
- **Banking UI mockups** in the hero (balance card, recent activity)
- **Interactive components**: dropdown navigation, case studies carousel
- **Smooth animations**: fade-in, slide-in, marquee ticker
- **CSS variables** for consistent design tokens
- **Mobile-first** responsive breakpoints

## Deployment

Ready for **Vercel** or **Netlify**:

```bash
npm run build
# Deploy the `dist/` folder
```
