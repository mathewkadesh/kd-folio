# Kadesh Portfolio v2

Cinematic personal portfolio for **Mathew Kadesh** — Full-Stack Engineer & AI Developer.
Built with React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS (custom Cinematic Noir theme) |
| Animation | Framer Motion |
| Routing | react-router-dom v6 |
| Icons | lucide-react |
| Utilities | clsx, tailwind-merge |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check + production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
  components/     Navbar, Footer, MediaSlot, SectionGlow, ProjectCard, SkillBar
  pages/          Home, Projects, About, CaseStudies, CaseStudyDetail, Services, Contact, CV
  data/           projects.ts, caseStudies.ts, services.ts, skills.ts, experience.ts, media.ts
  lib/            cn.ts (clsx util), motion.ts (Framer variants)
  App.tsx         Lazy-loaded routes + shell
  main.tsx        React 18 root
  index.css       Tailwind directives + print styles
```

## Adding Content

All content lives in `src/data/`. Edit these typed files to update the site:

| File | Controls |
|---|---|
| `projects.ts` | Projects grid, featured row, filter chips |
| `caseStudies.ts` | Case study pages (full content) |
| `services.ts` | Services grid + filter |
| `skills.ts` | Skill bars + soft skills |
| `experience.ts` | Timeline + education |
| `media.ts` | Image slots — add `src:` to swap placeholder |

## Adding Images

See `MEDIA.md` for the full list of image slots, ideal dimensions, and generation prompts.

Short version: open `src/data/media.ts`, find the entry by `id`, add `src: '/images/your-file.jpg'`.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to Vercel — it detects Vite automatically.

For client-side routing, add `vercel.json` at root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Fonts

Loaded via CDN in `index.html`:
- **Clash Display** (Fontshare) — display/headings
- **Satoshi** (Fontshare) — body
- **JetBrains Mono** (Google Fonts) — mono/code

## Design Tokens (Tailwind)

| Token | Value | Usage |
|---|---|---|
| `ink` | `#0A0A0B` | Page background |
| `surface` | `#141416` | Card backgrounds |
| `surface2` | `#1C1C20` | Hover/nested surfaces |
| `cinema` | `#E50914` | Primary red accent |
| `text` | `#F5F5F7` | Primary text |
| `muted` | `#A1A1AA` | Secondary text |
| `faint` | `#6B6B73` | Tertiary/hints |
