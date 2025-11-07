Professional Portfolio (React + Vite)

Overview
- A modern, accessible portfolio site built with React 18 and Vite.
- Sections: Hero, About, Projects, Experience, Skills, Contact, and Footer.
- Theme toggle (light/dark) with system-preference sync and localStorage.

Getting Started
1) Install dependencies
   - In `portfolio-landing/`: `npm install`
2) Start the dev server (fixes JSX MIME error)
   - `npm run dev`
   - Open the local URL (default `http://localhost:5173`).

Why the MIME error happened
- Browsers can’t load `.jsx` files directly as ES modules from a plain file server.
- Vite transpiles JSX and serves it with the correct `text/javascript` MIME type.
- Always use `npm run dev` (or a proper build) instead of opening `index.html` directly.

Build for production
- `npm run build` → outputs production assets to `dist/`
- `npm run preview` → preview the production build locally

Customize Your Content
- Edit `src/data/portfolioData.js` to update:
  - Profile: name, location, headline, social links, CTA URLs
  - About: summary, highlights, services
  - Projects: titles, descriptions, stats, tech, CTA links, image paths (empty by default)
  - Experience: companies, roles, periods, achievements
  - Skills: categories and testimonials
  - Contact: email, phone, location, copy, and Calendly link

Assets
- Project images are optional. Leave `image: ''` to keep placeholders visible.
- Add your images to `public/` (e.g., `public/images/project-1.jpg`) and reference them in data as `/images/project-1.jpg`.

Structure
- Entry: `index.html` → `src/main.jsx` → `src/App.jsx`
- Styling: `src/styles/global.css`
- Reusable UI: `src/components/*`
- Sections: `src/sections/*`
- Hooks: `src/hooks/*`

Notes
- The theme toggle uses simple emoji icons (🌙 / ☀️). Swap for SVGs in `src/components/Icon.jsx` if preferred.
- Accessibility: landmarks, labels, keyboard focus, and reduced motion are included by default.

