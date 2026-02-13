# 🌐 Rustin Systems - Engineering Solutions

> **Engineering-Led Infrastructure Solutions bridging hardware constraints and software requirements.**

## 📖 Overview
This repository hosts the source code for the **Rustin Systems** official website, a Next.js application designed to showcase specialized IT solutions, server automation, and network infrastructure engineering.

The platform serves as a digital portfolio and client portal, detailing expertise in Linux orchestration, network optimization, and secure remote access architectures.

## 🛠️ Operational Logic

The application is built on **Next.js 16** and **React 19**, utilizing a component-based architecture to present complex engineering services clearly.

### 1. Dynamic Content Management
Instead of static HTML, the site uses a markdown-based CMS approach for case studies and blog posts.

*   **`lib/posts.tsx`**: Handles the retrieval and sorting of markdown files from the `content/` directory.
*   **Case Studies**: Dynamically mapped from markdown content to the "Project Highlights" and "Services" sections, ensuring the portfolio stays up-to-date with the latest engineering feats.

### 2. Isomorphic Rendering
*   **Server Components**: Utilized for the majority of the pages (like `src/app/page.tsx`) to ensure optimal SEO and performance.
*   **Client Components**: Interactive UI elements (like the Navbar and mobile menu) are hydrated on the client side for responsiveness.

### 3. Styling & Design System
*   **Tailwind CSS v4**: A utility-first CSS framework configured for a "Gunmetal" and "Silver" aesthetic, reflecting the industrial robustness of the services offered.
*   **Typography**: Uses `Inter` and `Roboto Mono` to maintain a clean, technical visual identity.

## 📂 Repository Structure

| File/Directory | Description |
| :--- | :--- |
| `src/app/page.tsx` | **Main Landing:** The home page aggregating Hero, About, Services, and Highlights. |
| `src/components/` | **UI Components:** Reusable blocks like `Hero`, `ServiceCard`, `Navbar`, and `Footer`. |
| `content/` | **Case Studies:** Markdown files documenting engineering projects and blogs. |
| `src/lib/` | **Utilities:** Helper functions for data fetching and logic. |
| `public/` | **Assets:** Static images and icons. |

## 🏗️ Deployment Context
This site is designed to be deployed on **Vercel** or any Node.js compatible hosting environment.
*   **CI/CD:** Automated builds on commit.
*   **Performance:** Optimized for Core Web Vitals with Next.js image optimization and font loading.

---
<div align="center">
  <p><i>Engineered by <a href="https://rustinsystems.com">Rustin Systems</a></i></p>
  <p>Bridging Hardware Constraints & Software Architecture</p>
</div>
