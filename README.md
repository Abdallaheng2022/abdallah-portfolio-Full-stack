# Abdallah Elbohy | Full Stack Developer Portfolio

My personal portfolio site. It shows my full stack and AI projects, my skills across the front end, back end and data layers, and how to contact me.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

**Live site:** https://abdallaheng2022.github.io/abdallah-portfolio-Full-stack/

## Features

- A stack diagram in the hero showing the layers I work across: interface, API, and data & AI
- Projects marked with the layers they cover, with filters for Full stack, Interface, API and Data & AI
- Light and dark mode that follows your system setting and remembers your choice
- Responsive layout, keyboard-friendly navigation and reduced-motion support
- All content in one file (`src/data.ts`), so updating the site doesn't mean touching components
- Deploys to GitHub Pages automatically on every push to `main`

## Built With

- **React 18** and **TypeScript**
- **Tailwind CSS 3**, with theme colors as CSS variables
- **Vite 5**
- **GitHub Actions** and **GitHub Pages** for deployment

## Getting Started

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
git clone https://github.com/Abdallaheng2022/abdallah-portfolio-Full-stack.git
cd abdallah-portfolio-Full-stack
npm install
npm run dev
```

Then open http://localhost:5173.

## Scripts

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start the development server                |
| `npm run build`   | Type-check and build for production         |
| `npm run preview` | Preview the production build locally        |

## Project Structure

```
src/
├── data.ts              All site content: profile, links, projects, skills, experience
├── App.tsx              Page layout
├── index.css            Theme colors (light and dark) and shared styles
└── components/
    ├── Header.tsx       Navigation, mobile menu, theme switcher
    ├── Hero.tsx         Intro and stack diagram
    ├── Projects.tsx     Project list with layer filters
    ├── LayerDots.tsx    Strip showing which layers a project covers
    ├── Skills.tsx       Skills grouped by layer
    ├── Background.tsx   Experience and education
    ├── Contact.tsx      Contact section and footer
    └── Section.tsx      Shared section wrapper
```

## Adding a Project

Add an object to `PROJECTS` in `src/data.ts`:

```ts
{
  title: "My New App",
  year: "2026",
  summary: "One or two sentences about what it does for the user.",
  highlights: ["Something interesting about how it's built"],
  layers: ["ui", "api", "data"],   // the layers it covers
  stack: ["React", "FastAPI", "PostgreSQL"],
  repo: "https://github.com/Abdallaheng2022/my-new-app",
  demo: "https://...",             // optional
}
```

## Deployment

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

The workflow sets the base path for you: a repo named `<username>.github.io` is served from the root, and any other repo from `/<repo-name>/`.

## License

[MIT](LICENSE)
