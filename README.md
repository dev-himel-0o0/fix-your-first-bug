# Fix Your First Bug

> A tiny open-source playground for people who have never opened a pull request.

[![CI](https://github.com/dev-himel-0o0/fix-your-first-bug/actions/workflows/ci.yml/badge.svg)](https://github.com/dev-himel-0o0/fix-your-first-bug/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.6-black.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6.svg)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8.svg)](https://tailwindcss.com)
[![Playwright](https://img.shields.io/badge/Tested_with-Playwright-2ead33.svg)](https://playwright.dev)

## Overview

**Fix Your First Bug** is a deliberately small Next.js application with three intentionally broken TypeScript functions. Pick one, fix it, and walk through the real contribution flow — fork, branch, commit, pull request — on a codebase small enough to understand in one sitting.

Most "good first issue" labels live in repositories with thousands of files. That is a lot of pressure for a first pull request. This project keeps the whole workflow but shrinks the codebase down to three functions that each contain one obvious bug. You cannot break anything outside the file you are fixing, and the exercise page updates immediately so you can see whether your fix worked.

## Screenshot

![Fix Your First Bug home page](docs/images/screenshot-home.png)

_The landing page: a short explanation, a live preview of one of the bugs, and a direct route into the bug board._

## Live Demo & Links

| Resource | Link |
| --- | --- |
| **Live project** | [fix-your-first-bug.vercel.app](https://fix-your-first-bug.vercel.app) |
| **Source code** | [github.com/dev-himel-0o0/fix-your-first-bug](https://github.com/dev-himel-0o0/fix-your-first-bug) |
| **Contribution guide** | [CONTRIBUTING.md](CONTRIBUTING.md) |
| **Changelog & releases** | [CHANGELOG.md](CHANGELOG.md) · [v2.0.0 release](https://github.com/dev-himel-0o0/fix-your-first-bug/releases/tag/v2.0.0) |
| **Issue tracker** | [GitHub Issues](https://github.com/dev-himel-0o0/fix-your-first-bug/issues) |
| **Contributors page** | [Live contributors page](https://fix-your-first-bug.vercel.app/contributors) |
| **API reference** | [GitHub REST API — repository contributors](https://docs.github.com/en/rest/repos/repos#list-repository-contributors) |
| **Framework docs** | [Next.js](https://nextjs.org/docs) · [Tailwind CSS](https://tailwindcss.com/docs) · [Playwright](https://playwright.dev/docs) |

> The project has no custom backend API. The only external integration is the server-side GitHub REST call that powers the contributors page.

## Key Features

- **Three isolated exercises** — odd numbers, even numbers, and prime numbers, each with exactly one intentional bug in a single file.
- **Instant visual feedback** — the number grid is rendered from the same helper you are fixing, so the highlighted cells change as soon as the logic is corrected.
- **A real contribution workflow** — fork, clone, branch, fix, test, commit, push, and open a pull request, documented end to end.
- **Beginner-safe boundaries** — a fixed `(x: number) => boolean` signature and a clear "change only this file" rule mean a first PR cannot accidentally break the app.
- **Modern responsive UI** — a clean slate/indigo/amber design, mobile navigation, keyboard focus states, and a skip-to-content link.
- **Contributors page** — server-side GitHub API fetch with incremental regeneration, avatar rendering, and a friendly fallback if the API is unavailable.
- **Production polish** — metadata, dynamic Open Graph image, web manifest, icons, `robots.txt`, `sitemap.xml`, loading skeletons, error boundary, and custom 404 page.
- **Automated quality gates** — strict TypeScript, ESLint, a production build, and eight Playwright end-to-end tests in GitHub Actions.
- **Deploy-ready** — zero-config Vercel deployment with preview URLs for every pull request.
- **Maintainable by design** — issue forms, a pull request template, grouped Dependabot updates, and a documented changelog.

## The Three Bugs

| Exercise | File | What is wrong |
| --- | --- | --- |
| Odd Numbers | `src/lib/bugs/numberTheory/oddNumbers.ts` | Even numbers are highlighted instead of odd numbers |
| Even Numbers | `src/lib/bugs/numberTheory/evenNumbers.ts` | Odd numbers are highlighted instead of even numbers |
| Prime Numbers | `src/lib/bugs/numberTheory/primeNumbers.ts` | `0` and `1` are reported as prime |

Each exercise page renders a grid of numbers (`1–100` for odd/even, `0–100` for prime). The highlighted cells come straight from the buggy function, so the page itself tells you whether your fix worked.

![The Odd Numbers exercise highlighting even numbers instead of odd numbers](docs/images/screenshot-odd-numbers.png)

> [!IMPORTANT]
> Fix only the exported function. Keep the `(x: number) => boolean` signature intact so the page keeps rendering after your change.

## Technologies Used

| Technology | Version | Role |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16.4.6 | App Router, routing, metadata routes, ISR, Vercel integration |
| [React](https://react.dev) | 19.3.1 | UI runtime and Server Components |
| [TypeScript](https://www.typescriptlang.org) | 5.x (strict) | Type safety across app code, components, and tests |
| [Tailwind CSS](https://tailwindcss.com) | 4.3.5 | Utility-first styling and responsive design |
| [Playwright](https://playwright.dev) | 1.65.1 | End-to-end browser testing |
| [ESLint](https://eslint.org) | 9.x | Static analysis and React/Next.js best practices |
| [lucide-react](https://lucide.dev) | 1.74.0 | Consistent, tree-shakeable SVG icons |
| [Vercel](https://vercel.com) | — | Hosting, production deployment, and PR previews |

### Why These Technologies?

- **Next.js 16 (App Router)** — file-based routing keeps the three exercises obvious to find, Server Components render the number grids with almost no client JavaScript, and built-in metadata routes generate the sitemap, manifest, and Open Graph image without extra tooling. Vercel supports it with zero configuration.
- **TypeScript in strict mode** — the whole point of the project is a function signature a beginner can trust. Strict types make that contract explicit and catch mistakes before the browser does.
- **Tailwind CSS 4** — the original project used Bootstrap, which encouraged large class names and global overrides. Tailwind keeps the design local to each component, makes the responsive layout easy to reason about, and ships only the CSS that is used.
- **React 19** — required by Next.js 16 and a good fit for the small client-side pieces (mobile navigation and the error boundary) while everything else stays on the server.
- **Playwright** — the app has real browser behaviour: a responsive menu, client-side navigation, and 100+ rendered number cells per page. Playwright verifies the rendered result, not just the component tree.
- **ESLint with `eslint-config-next`** — catches React hook mistakes and Next.js anti-patterns early. It already caught a cascading render in the mobile menu during development.
- **lucide-react, clsx, and tailwind-merge** — small, focused helpers: consistent icons, conditional class names, and conflict-free Tailwind composition.
- **Vercel** — the natural host for Next.js: automatic framework detection, incremental regeneration for the contributors page, and a preview deployment on every pull request.

## Dependencies

Everything below is declared in [`package.json`](package.json). Transitive dependencies are locked in `package-lock.json`.

### Runtime Dependencies

| Package | Declared version | Purpose |
| --- | --- | --- |
| `next` | `16.4.6` | Framework, router, server rendering, metadata routes |
| `react` | `19.3.1` | Component model and hooks |
| `react-dom` | `19.3.1` | DOM renderer for React |
| `lucide-react` | `^1.74.0` | Icon set used across the UI |
| `clsx` | `^2.1.1` | Conditional class name composition |
| `tailwind-merge` | `^3.7.0` | Resolves conflicting Tailwind utility classes |

### Development Dependencies

| Package | Declared version | Purpose |
| --- | --- | --- |
| `typescript` | `^5.0.0` | Type checker and compiler |
| `@types/node` | `^26.0.0` | Node.js type definitions |
| `@types/react` | `^19.0.0` | React type definitions |
| `@types/react-dom` | `^19.0.0` | React DOM type definitions |
| `eslint` | `^9.0.0` | Linter |
| `eslint-config-next` | `16.4.6` | Next.js and React lint rules |
| `tailwindcss` | `4.3.5` | Tailwind engine |
| `@tailwindcss/turbopack` | `4.3.5` | Tailwind compilation inside Turbopack |
| `@playwright/test` | `^1.65.1` | Browser test runner and assertions |

## Problems This Project Solves

- **First-PR intimidation.** Contributors do not need to understand a large product or navigate thousands of files. The entire exercise lives in one function.
- **Unclear local setup.** A clone, `npm install`, and `npm run dev` is the whole setup. No database, no credentials, and no external services are required.
- **No feedback loop.** Many beginner exercises are checked by a hidden test. Here the page itself shows the result — the wrong cells are highlighted until the logic is fixed.
- **Unfamiliar contribution mechanics.** The docs walk through forking, branching, committing, pushing, and opening a pull request with screenshots at each step.
- **Fear of breaking things.** The bug files are isolated, the function signature is fixed, and CI verifies the rest of the app so a first contribution is safe to attempt.
- **Demo repositories that rot.** The rewrite adds a modern stack, automated dependency updates, and a CI pipeline so the project stays usable for future beginners.

## Challenges Faced During Development

- **Preserving the bugs through a complete rewrite.** Every page, component, and test was rebuilt, but the three helpers had to keep exactly the same behaviour. Keeping the grids driven by the same exported functions meant the bugs stayed discoverable and the exercise remained solvable.
- **Leaving Create React App and Bootstrap behind.** The original client-side router and Bootstrap grid had no direct equivalent in the App Router and Tailwind. The layout, navigation, cards, and number grid were redesigned around Server Components and utility classes rather than ported line by line.
- **Tailwind CSS 4 with Turbopack.** Tailwind 4's Turbopack integration requires the `@tailwindcss/turbopack` loader and a `turbopack.rules` entry in `next.config.ts`. Older PostCSS-based setup guides did not apply, so the build configuration had to be verified against the actual Next.js 16 toolchain.
- **GitHub API rate limits.** The contributors page fetches repository data on the server at build/ISR time. It revalidates hourly, shows a clear fallback when GitHub is unavailable, and accepts an optional server-only `GITHUB_TOKEN` to raise the rate limit without ever exposing it to the browser.
- **React 19's stricter lint rules.** The mobile menu originally closed itself in a `useEffect` keyed on the pathname. The new `react-hooks/set-state-in-effect` rule correctly flagged the cascading render, so the menu now closes from the navigation click handlers instead.
- **Reliable CI for a server-rendered app.** The GitHub Actions workflow installs the Playwright browser, builds the app, starts the production server, runs all eight tests, and uploads the report as an artifact. Concurrency groups cancel superseded runs so stale pushes do not waste runner minutes.
- **A fresh history without losing the original.** The old Create React App implementation remains available in the [original upstream repository](https://github.com/c0der-himel/fix-your-first-bug), while the rewrite started from an orphan branch with a clean, single-purpose commit history.

## Run Locally

### Prerequisites

- **Node.js 20.9 or newer** (the repository targets Node 22 in `.nvmrc` and CI)
- **npm** (bundled with Node.js)
- **Git**

### Step-by-Step Instructions

1. **Clone the repository.**

   ```sh
   git clone https://github.com/dev-himel-0o0/fix-your-first-bug.git
   cd fix-your-first-bug
   ```

2. **Use the expected Node version (optional but recommended).**

   ```sh
   nvm use
   ```

3. **Install dependencies.**

   ```sh
   npm install
   ```

4. **Create local environment variables (optional).** The app runs without them; copy the example if you want to override the repository slug or canonical URL.

   ```sh
   cp .env.example .env.local
   ```

5. **Start the development server.**

   ```sh
   npm run dev
   ```

6. **Open the app** at [http://localhost:3000](http://localhost:3000). Pick an exercise and confirm that the grid shows the bug.

7. **Install the Playwright browser (first test run only).**

   ```sh
   npx playwright install chromium
   ```

8. **Run the same checks as CI.**

   ```sh
   npm run lint
   npm run typecheck
   npm run build
   npm run test:e2e
   ```

9. **Serve the production build locally (optional).**

   ```sh
   npm run build
   npm run start
   ```

### Available Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run test:e2e` | Run the Playwright suite (starts the app automatically) |
| `npm run test:e2e:ui` | Run Playwright in UI mode |

## Project Structure

```text
src/
├── app/                         # App Router pages, metadata, sitemap, manifest
│   ├── odd-numbers/
│   ├── even-numbers/
│   ├── prime-numbers/
│   ├── select/
│   ├── contributors/
│   ├── error.tsx                # Route-level error boundary
│   ├── not-found.tsx            # Custom 404 page
│   └── opengraph-image.tsx      # Dynamic social preview image
├── components/                  # Navbar, footer, bug cards, number grid
├── lib/
│   ├── bugs/numberTheory/       # ← the three intentional bugs live here
│   ├── github.ts                # server-side contributors fetch
│   └── site.ts                  # repo/URL configuration
└── types/                       # GitHub API and environment types
tests/e2e/                       # Playwright tests for every route
docs/images/                     # README screenshots
.github/                         # CI, issue forms, PR template, Dependabot
```

## Configuration

Copy `.env.example` to `.env.local` for local overrides. All variables are optional in development.

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_GITHUB_REPO` | `dev-himel-0o0/fix-your-first-bug` | Repo slug used for GitHub links and the contributors page |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` (or the Vercel URL) | Canonical URL for metadata, `robots.txt`, and `sitemap.xml` |
| `GITHUB_TOKEN` | unset | Optional server-only token that raises the GitHub API rate limit |

> `GITHUB_TOKEN` is read on the server only. Do not prefix it with `NEXT_PUBLIC_`.

## Deployment

The app deploys to Vercel with zero extra configuration:

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Set `NEXT_PUBLIC_GITHUB_REPO` and `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables.
3. Optionally add `GITHUB_TOKEN` to raise the contributors API rate limit.
4. Deploy. Vercel will also create a preview deployment for every pull request.

Set `NEXT_PUBLIC_SITE_URL` to the final production URL so canonical metadata, the sitemap, and `robots.txt` point at the right host.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the full fork → branch → fix → pull-request walkthrough. The short version:

1. Fork this repository and clone your fork.
2. Create a branch: `git checkout -b fix-odd-numbers`.
3. Fix one function in `src/lib/bugs/numberTheory/`.
4. Run `npm run lint && npm run typecheck && npm run test:e2e`.
5. Commit, push to your fork, and open a pull request against `main`.

Every pull request gets a Vercel preview deployment. Please keep PRs focused on a single bug, and be kind in reviews — everyone here is learning.

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md). Version [`2.0.0`](https://github.com/dev-himel-0o0/fix-your-first-bug/releases/tag/v2.0.0) is the Next.js rewrite of the original Create React App project.

## Credits

Originally created by [MD. Shahadat Hussain Himel](https://github.com/dev-himel-0o0) in 2021 as a demo repository for first-time contributors. The project is inspired by [Pledge](https://github.com/codeforcauseorg/pledge) by Code for Cause.

## License

[MIT](LICENSE) © 2021–2026 MD. Shahadat Hussain Himel
