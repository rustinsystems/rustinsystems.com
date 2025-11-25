# Rustin Systems Website - Walkthrough

I have successfully built the Rustin Systems website using Next.js 15, Tailwind CSS v4, and Lucide-React.

## Features Implemented

### 1. Design System ("Industrial Metallic")
- **Theme**: Custom Tailwind configuration with Gunmetal, Charcoal, and Silver/Chrome accents.
- **Typography**: Inter (Sans) and Roboto Mono (Monospace) for technical precision.
- **Styling**: Glassmorphism effects, gradients, and grid patterns to evoke an engineering aesthetic.

### 2. Landing Page (`/`)
- **Hero Section**: "Bridging the Gap" headline with animated "SYSTEMS OPERATIONAL" badge.
- **Services Grid**: 4-column layout showcasing Server Admin, Network Infrastructure, Web App Solutions, and Custom Solutions.
- **Trust Indicators**: Highlights experience with local institutions.

### 3. Portfolio Page (`/portfolio`)
- **Bio**: Shahied Rustin's professional background.
- **Skills Matrix**: Categorized into Engineering, Development, and Ops/Admin.
- **Featured Projects**: Detailed cards for "AI Video Synthesis", "Infrastructure Maintenance Database", etc.

### 4. Blog System (`/blog`)
- **File-Based CMS**: Posts are written in Markdown (`content/posts/*.md`).
- **Dynamic Routing**: `[slug]` pages are generated statically at build time.
- **Typography**: Optimized reading experience using `@tailwindcss/typography`.

### 5. Conversion & Engagement Tweaks
- **Download CV**: Dedicated button on Portfolio page for recruiters.
- **Cross-Linking**: "Custom Solutions" service links directly to relevant blog posts.
- **Visuals**: Diagram support in blog posts (SVG/Images) to demonstrate technical concepts.
- **Branding**: Integrated custom "R" logo in Navbar, Hero section, and as site favicon.
- **Filtering**: Implemented client-side tag filtering for blog posts.

## Verification Results

### Build Status
The project builds successfully with `npm run build`.
- Static pages generated: `/`, `/blog`, `/portfolio`
- SSG pages generated: `/blog/[slug]`

### Key Files
- `src/app/globals.css`: Theme definitions.
- `src/components/Navbar.tsx`: Responsive navigation.
- `src/lib/posts.ts`: Markdown processing logic.
- `content/posts/optimizing-gpu-resources.md`: Example blog post.

## Next Steps
- Add more blog posts to `content/posts`.
- Deploy to Vercel or a VPS (e.g., using Docker).
