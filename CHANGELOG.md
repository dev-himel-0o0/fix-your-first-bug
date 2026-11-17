# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2026-11-18

The project was rebuilt from scratch as a modern Next.js application. The three intentional bugs are unchanged.

### Added

- Next.js 16 App Router application with React 19 and strict TypeScript.
- Tailwind CSS 4 design system with a responsive layout, light theme, and Ubuntu font.
- Dedicated exercise pages for odd, even, and prime numbers with interactive number grids.
- Error boundary, 404 page, loading skeletons, and an accessibility skip link.
- Dynamic Open Graph image, web manifest, `robots.txt`, and `sitemap.xml`.
- Contributors page backed by the GitHub REST API with ISR and graceful error handling.
- Playwright end-to-end tests for every route and the mobile navigation.
- GitHub Actions CI workflow running lint, type checks, build, and E2E tests.
- Issue templates, pull request template, and Dependabot configuration.
- Rewritten README, contribution guide, code of conduct, and this changelog.

### Changed

- Migrated from Create React App and React Router to the Next.js App Router.
- Replaced Bootstrap with Tailwind CSS.
- Migrated all JavaScript/JSX source files to TypeScript/TSX.
- Replaced the Freepik hero and 404 artwork with original SVG and JSX designs.
- Moved the bug helpers to `src/lib/bugs/numberTheory/`.
- Moved all documentation images to `docs/images/`.

### Removed

- Create React App build tooling, `react-scripts`, and Bootstrap.
- The unused GCD, LCM, and Factorial cards from the original bug board.
- Vendored Freepik assets.

### Fixed

- The odd number helper no longer reports even numbers as odd.
- The even number helper no longer reports odd numbers as even.
- The prime number helper no longer reports `0` and `1` as prime.

## [1.0.0] - 2021-02-14

### Added

- Original Create React App release with odd, even, prime, GCD, LCM, and factorial exercises.
- Bootstrap-based user interface.
- Contributors page using the GitHub API.

[Unreleased]: https://github.com/dev-himel-0o0/fix-your-first-bug/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/dev-himel-0o0/fix-your-first-bug/releases/tag/v2.0.0
[1.0.0]: https://github.com/dev-himel-0o0/fix-your-first-bug/releases/tag/v1.0.0
