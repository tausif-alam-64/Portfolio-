# AGENTS.md

## Project
Personal developer portfolio — showcases production client work (Study Zone library SaaS, Gokul Sweets, Kisan Inter College) to hiring managers and freelance clients simultaneously.

## Stack — do not change without asking first
- Next.js 15, App Router only (no `pages/`)
- JavaScript — no TypeScript, no `.ts`/`.tsx`
- Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config` file)
- Deploy target: Vercel
- Animation: CSS transitions + IntersectionObserver (no heavy library)
- Contact form backend: mailto (v1 MVP)

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — lint

## Directory structure
```
app/
  layout.js
  page.js
  globals.css
  about/page.js
  contact/page.js
  projects/page.js
  projects/[slug]/page.js
components/
  sections/
    Navbar.jsx
    Footer.jsx
    Hero.jsx
    FeaturedWork.jsx
    HowIWork.jsx
    AboutTeaser.jsx
    ContactBand.jsx
    ContactForm.jsx
  ui/
    Button.jsx
    StatusBadge.jsx
    ProjectCard.jsx
hooks/
  useScrollReveal.js
lib/
  projects.js
public/
  resume.pdf
  images/projects/*.jpg
```

## Feature → File map
| Feature | File(s) |
|---|---|
| Root layout (fonts, metadata) | `app/layout.js` |
| Global styles / design tokens | `app/globals.css` |
| Navbar (sticky, mobile overlay) | `components/sections/Navbar.jsx` |
| Footer (3-column, contact links) | `components/sections/Footer.jsx` |
| Home page (section composition) | `app/page.js` |
| Hero + proof strip | `components/sections/Hero.jsx` |
| Featured work grid | `components/sections/FeaturedWork.jsx` |
| How I work principles | `components/sections/HowIWork.jsx` |
| About teaser | `components/sections/AboutTeaser.jsx` |
| Contact CTA band | `components/sections/ContactBand.jsx` |
| Projects index (editorial list) | `app/projects/page.js` |
| Project detail (case study) | `app/projects/[slug]/page.js` |
| About page (narrative + stack) | `app/about/page.js` |
| Contact page + intent switcher | `app/contact/page.js`, `components/sections/ContactForm.jsx` |
| Button (4 variants) | `components/ui/Button.jsx` |
| Status badge (live dot) | `components/ui/StatusBadge.jsx` |
| Project card | `components/ui/ProjectCard.jsx` |
| Scroll reveal hook | `hooks/useScrollReveal.js` |
| Project data (all 3 projects) | `lib/projects.js` |

## Adding a new project
1. Add a new object to the `projects` array in `lib/projects.js`
2. Add thumbnail + screenshots to `public/images/projects/`
3. The project automatically appears on Home, Projects index, and gets its own `/projects/[slug]` page

## Conventions
- One component per file, PascalCase filename matching the export.
- Tailwind utility classes only. Shared values live as `@theme` tokens in `globals.css`.
- Keep components under ~200 lines; split when they grow past that.
- No new dependencies without asking first.
- Fonts: serif for reading, sans for interface, mono for evidence. Don't blur these.

## Rules
- Check the Feature → File map before grepping or reading broadly.
- When you add, move, or rename a file that affects a listed feature, update this table in the same session.
- Don't introduce TypeScript, CSS-in-JS, or a new component library without explicit approval.