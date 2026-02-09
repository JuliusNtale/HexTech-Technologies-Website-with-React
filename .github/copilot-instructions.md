# Copilot Instructions — Neuraltale Corporate Website

## Architecture

- **Next.js 16 App Router** with `output: 'export'` (fully static site). No server-side APIs, no SSR at runtime — everything is pre-rendered at build time.
- **Deployed to Cloudflare Pages** via Wrangler (`wrangler.toml`). The build output directory is `out/`.
- React 19, TypeScript, Tailwind CSS 3 (with CSS-variable-based theming via shadcn/ui `new-york` style).
- Package manager is **pnpm**. Dev server runs on port **3001** (`pnpm dev`).

## Key Constraints (Static Export)

- No `getServerSideProps`, no API routes, no `cookies()`, no `headers()` — these break `output: 'export'`.
- Dynamic routes must use `generateStaticParams`. Any new route file needs `export const dynamic = 'force-static'` if it uses dynamic features.
- Images use `unoptimized: true` (no Next.js image optimization server). Always provide width/height or use `fill`.
- Email is handled client-side via **EmailJS** (`@emailjs/browser`), not server actions.

## Project Structure

```
src/app/            — App Router pages (each folder = route, page.tsx = content)
src/components/
  layout/           — Navbar.tsx, Footer.tsx (included in root layout, shared across all pages)
  sections/         — Full-page section components (Hero, ServicesGrid, BlogPost, etc.)
  ui/               — Reusable UI primitives (Logo, CookieConsent, infinite-slider)
  SEO/              — StructuredData.tsx (JSON-LD schema injection)
  utils/            — ResourceHints.tsx
src/hooks/          — useEmailForm.ts (EmailJS submission), useComponentPreloader.ts
src/lib/
  seo.ts            — siteConfig, all JSON-LD schemas (organization, localBusiness, products)
  emailjs.ts        — EmailJS config, form data interfaces, send functions
  utils.ts          — cn() (clsx + twMerge), formatNumber, debounce, throttle
  secure-cookies.ts — Client-side cookie manager (consent tracking)
  analytics.ts      — Placeholder analytics wrapper
src/types/index.ts  — Shared interfaces: Service, Testimonial, Stat, ContactFormData, NavItem
```

## Conventions & Patterns

### Components
- **Section components** are default-exported, loaded via `dynamic()` imports on the homepage with skeleton `loading` divs for perceived performance.
- **Client components** must have `'use client'` directive. Keep it minimal — prefer server components (no directive) for static pages.
- Use `cn()` from `@/lib/utils` for conditional classNames (never raw template literals for Tailwind merging).
- Icons: use `lucide-react` for UI icons and `react-icons/fa` for social/brand icons.
- Animations: `framer-motion` (imported as `motion` in newer code). Use sparingly for section reveals and interactive elements.

### Path Aliases
- `@/*` → `./src/*` (e.g., `import Logo from '@/components/ui/Logo'`)
- `@/components/*`, `@/lib/*`, `@/types/*`, `@/hooks/*` all resolve into `src/`.

### Adding a New Page
1. Create `src/app/<route>/page.tsx`.
2. Export `metadata: Metadata` with title (uses `%s | Neuraltale` template), description, and keywords array focused on Tanzania/Dar es Salaam SEO.
3. Import relevant section components. Use `dynamic()` for heavy components.
4. Add the route to `src/app/sitemap.ts` with appropriate `changeFrequency` and `priority`.
5. Add navigation entry in `src/components/layout/Navbar.tsx` `navItems` array if user-facing.

### Adding a Blog Post
- Create `src/app/blog/<slug>/page.tsx`.
- Export `metadata` for SEO, then define a `postData` object with `{ title, author, publishDate, readTime, category, tags, image, content }`.
- Pass `postData` to `<BlogPost post={postData} />`. Blog content is raw HTML string (not MDX).
- Add the blog URL to `sitemap.ts`.

### Email Forms
- All forms use the `useEmailForm()` hook → calls `sendContactEmail/sendQuoteEmail/sendCareerEmail/sendSupportEmail` from `src/lib/emailjs.ts`.
- Form data interfaces are defined in `src/lib/emailjs.ts`. The hook handles loading, success, and error states.
- EmailJS credentials come from `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` and `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` env vars.

### SEO & Structured Data
- Centralized in `src/lib/seo.ts` — contains `siteConfig`, organization/localBusiness/product JSON-LD schemas.
- `StructuredData` component injects schemas into head via `useEffect` (client-side).
- Every page should have detailed `metadata` export with Tanzania-specific keywords.

## Build & Development

```bash
pnpm dev          # Dev server at localhost:3001
pnpm build        # Static export to out/
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
```

- Production build strips `console.log` (keeps `error` and `warn`) via Next.js compiler config.
- Cloudflare security headers are set in `wrangler.toml` (X-Frame-Options, CSP, etc.) and `public/_headers`.

## UI Theming

- Colors are defined as CSS custom properties in `src/styles/globals.css` (`:root` block) using HSL values.
- Corporate palette: Primary **Golden Yellow `#FFC107`**, Secondary **Dark Navy Blue `#002855`**, Accent 1 **Teal `#00838F`**, Accent 2 **Cream/Beige `#F5E6D3`**.
- Tailwind `corporate-*` classes: `corporate-primary: #002855`, `corporate-accent: #00838F`, `corporate-text: #002855`, `corporate-light: #F5E6D3`.
- Neon/decorative colors are mapped to amber/teal/cream instead of the previous blue/purple scheme.
- The site is light-themed despite having `class="dark"` on `<html>` — the CSS variables map to light colors.
- shadcn/ui components use the `new-york` variant. Config is in `components.json`. Additional registries: `@tailark`, `@kokonutui`.
