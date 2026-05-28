# N7 — The New Foundation of Modern Banking

> A production-quality, responsive fintech landing page built with React + Vite, faithfully translated from a professional Figma design into clean, performant code.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Code--Linear-181717?style=flat-square&logo=github)](https://github.com/sahilbakshi3/Code-Linear)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Sections & Components](#sections--components)
- [Design System](#design-system)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**N7** is a modern fintech SaaS landing page for *Linktia Infosystems Ltd*, the company behind the **CB7** core banking platform and **N7** digital banking solution. The project is a pixel-perfect React implementation of a dark-themed, enterprise-grade Figma design, showcasing solutions for banks and financial institutions across cloud banking, digital banking, open banking, and loan management.

The codebase prioritises clean component architecture, consistent design tokens via CSS custom properties, and a fully responsive layout that works seamlessly across desktop, tablet, and mobile.

---

## Live Demo

> 🚀 **[View Live →](https://code-linear-assignment-o6ww7kua7-sahilbakshi3s-projects.vercel.app/)** 

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Build Tool | [Vite 5](https://vitejs.dev/) |
| Styling | Vanilla CSS with CSS Custom Properties |
| Icons | [React Icons 5](https://react-icons.github.io/react-icons/) |
| Fonts | [Archivo](https://fonts.google.com/specimen/Archivo) + [Chivo Mono](https://fonts.google.com/specimen/Chivo+Mono) via Google Fonts |
| Deployment | Vercel / Netlify |

No CSS frameworks (e.g. Tailwind) are used — all styling is hand-crafted with BEM-inspired class naming and scoped per-component CSS files.

---

## Features

- **Dark fintech aesthetic** — deep navy/black palette (`#000d12`) with a blue gradient accent system
- **Fixed glassmorphism navbar** — backdrop-blur pill nav with scroll-aware opacity and dropdown menus
- **Animated marquee ticker** — smooth infinite-scroll partner logos strip
- **Interactive case studies carousel** — prev/next navigation with dot indicators
- **Banking UI mockups** — floating balance card and recent activity card overlaid on a hero image
- **Sticky left-column layout** — digital banking section uses position:sticky for a polished scroll experience
- **Gradient CTA buttons** — blue-to-indigo gradient primaries with hover lift/glow effects
- **CSS custom properties** — full design token system for colours, spacing, typography, radii, and shadows
- **Mobile-first responsive** — three-tier breakpoint system (desktop → tablet → mobile)
- **Zero runtime dependencies** beyond React — no state management library, no CSS framework

---

## Project Structure

```
n7-landing/
├── public/                   # Static public assets
├── src/
│   ├── assets/               # SVGs, images, and icons
│   │   ├── analytics_mac_1.svg
│   │   ├── analytics_mac_2.svg
│   │   ├── CB7.svg
│   │   ├── N7-1.svg
│   │   ├── lady_home_page.jpg
│   │   ├── Home_Page-1.svg   # Balance card mockup
│   │   ├── Home_Page-2.svg   # Activity card mockup
│   │   ├── trusted_by_row.svg
│   │   ├── toni_kross_1-3.svg # Phone app mockups
│   │   ├── tick.svg
│   │   ├── Learn_more.svg
│   │   ├── left_arrow.svg
│   │   ├── right_arrow.svg
│   │   └── ...
│   │
│   ├── components/           # Shared/reusable UI components
│   │   ├── Navbar.jsx        # Fixed nav with dropdowns & mobile menu
│   │   ├── Navbar.css
│   │   ├── Marquee.jsx       # Auto-scrolling partner logo ticker
│   │   ├── Marquee.css
│   │   ├── Footer.jsx        # Multi-column footer with office locations
│   │   └── Footer.css
│   │
│   ├── sections/             # Full-width page sections
│   │   ├── Hero.jsx          # Hero with floating banking UI cards
│   │   ├── Hero.css
│   │   ├── Solutions.jsx     # 5-card solutions grid (sticky left)
│   │   ├── Solutions.css
│   │   ├── CloudBanking.jsx  # CB7 cloud banking feature block
│   │   ├── CloudBanking.css
│   │   ├── CoreBankingFeatures.jsx  # Feature checklist with dashboard image
│   │   ├── CoreBankingFeatures.css
│   │   ├── PaperlessSection.jsx     # Gradient CTA card
│   │   ├── PaperlessSection.css
│   │   ├── DigitalBanking.jsx       # N7 digital banking with phone mockups
│   │   ├── DigitalBanking.css
│   │   ├── Insights.jsx      # Blog/article cards
│   │   ├── Insights.css
│   │   ├── CaseStudies.jsx   # Carousel with prev/next controls
│   │   ├── CaseStudies.css
│   │   ├── CTASection.jsx    # Final call-to-action banner
│   │   └── CTASection.css
│   │
│   ├── styles/
│   │   ├── globals.css       # CSS custom properties + global resets
│   │   └── buttons.css       # Reusable .btn, .btn-primary, .btn-outline classes
│   │
│   ├── App.jsx               # Root layout — section composition
│   └── main.jsx              # ReactDOM entry point
│
├── index.html                # HTML shell with Google Fonts links
├── vite.config.js            # Vite + React plugin config
├── package.json
└── package-lock.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v8 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sahilbakshi3/Code-Linear.git

# 2. Navigate into the project directory
cd Code-Linear

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Build optimised production bundle to `dist/` |
| `npm run preview` | Locally preview the production build |

---

## Sections & Components

### Components

| Component | Description |
|---|---|
| `Navbar` | Fixed glassmorphism pill navbar with Solutions and Resources dropdown menus, a "Request Demo" CTA, and a collapsible hamburger menu on mobile |
| `Marquee` | Infinite horizontal ticker strip of partner/client logos on a white background |
| `Footer` | Three-column office locations (London · Dubai · India) with navigation links and copyright |

### Page Sections (top → bottom)

| Section | Description |
|---|---|
| `Hero` | Full-viewport hero with headline, CTA buttons, trusted-by logos, and floating banking UI card mockups over a portrait image |
| `Solutions` | Sticky-left heading with a two-column card grid covering CB7, N7, Open Banking, and Loan products |
| `CloudBanking` | Left content + right dashboard screenshot for the CB7 cloud core banking platform |
| `CoreBankingFeatures` | Split layout with a checklist of core banking capabilities alongside a dashboard image |
| `PaperlessSection` | Full-width gradient CTA card prompting paperless adoption |
| `DigitalBanking` | Sticky left header with three alternating phone mockup rows on a light background, plus an embedded dark CTA block |
| `Insights` | Featured article card + 2-column grid of blog post cards |
| `CaseStudies` | Image + content carousel with prev/next arrows and dot progress indicators |
| `CTASection` | Final split CTA with "Contact Us" and "Request Demo" buttons |

---

## Design System

All design tokens are defined as CSS custom properties in `src/styles/globals.css`.

### Colours

| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `#060d1a` | Page backgrounds |
| `#000d12` | — | Section backgrounds (hard-coded) |
| `#e9f4f9` | — | Primary text on dark backgrounds |
| `#00b4fd → #003ace` | — | Gradient accent (buttons, glows) |
| `#01141b` | — | Card backgrounds |

### Typography

| Font | Weight Range | Usage |
|---|---|---|
| Archivo | 100–900 | All headings and body copy |
| Chivo Mono | 100–900 | Buttons, labels, tags, nav links |

### Spacing Scale

`--space-1` through `--space-32` following a 4px base grid.

### Border Radius

`--radius-sm` (4px) → `--radius-2xl` (24px) → `--radius-full` (9999px)

---

## Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `> 1100px` | Desktop — full two-column layouts, sticky left columns |
| `≤ 1024px` | Large tablet — columns collapse to single stack |
| `≤ 768px` | Tablet — reduced padding, stacked card rows, hamburger nav |
| `≤ 640px` | Small tablet — single-column grids throughout |
| `≤ 480px` | Mobile — full-width buttons, adjusted font sizes |

---

## Deployment

The project produces a static `dist/` bundle and can be deployed anywhere that serves static files.

### Vercel (recommended)

```bash
# Option 1 — Vercel CLI
npm i -g vercel
vercel

# Option 2 — Connect the GitHub repo in the Vercel dashboard
# Build Command:  npm run build
# Output Dir:     dist
```

### Netlify

```bash
# Option 1 — Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=dist

# Option 2 — Drag-and-drop the dist/ folder at app.netlify.com
```

### Manual / Other Hosts

```bash
npm run build
# Upload the contents of dist/ to any static host (S3, GitHub Pages, Cloudflare Pages, etc.)
```

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/your-feature-name`
3. Commit your changes — `git commit -m "feat: add your feature"`
4. Push to your branch — `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow the existing code style (BEM-ish CSS class names, co-located `.css` files per component/section).

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p align="center">
  Built with ☕ by <a href="https://github.com/sahilbakshi3">sahilbakshi3</a>
</p>
