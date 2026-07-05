# GV60 Companion App

A personal, mobile-first owner companion for a 2023 Genesis GV60 Performance.

The app organizes Owen's vehicle notes into tappable guide chapters, recommended settings,
troubleshooting cards, favorites/bookmarks, search, in-car quick references, and an image checklist.

Repository: https://github.com/oreagan81-arch/gv60-companion-app

## Tech Stack

- Vite
- React
- TypeScript
- TanStack Router
- Tailwind CSS

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

## Key Routes

- `/` - Home
- `/quick-start` - Quick Start
- `/full-guide` - Full Guide chapter index
- `/full-guide/cabin-tour` - Complete Cabin Tour
- `/full-guide/driving` - Driving Like a Pro
- `/full-guide/technology` - Complete Technology Guide
- `/full-guide/apple` - Apple Ecosystem Guide
- `/settings` - Recommended Settings
- `/troubleshooting` - Troubleshooting
- `/favorites` - Saved bookmarks
- `/in-car` - In the Car Now
- `/images` - Image checklist
- `/search` - Search across guide content

## Current Status

The guide is structured around expanded chapter data in `src/data/chapters.ts` plus focused
supporting data files for settings, troubleshooting, and image planning.

Expanded chapters include Quick Start, Cabin Tour, Driving, Technology, Apple Ecosystem, Charging,
Safety, and Maintenance. Some later chapters reuse existing detailed route components while the
newer data-driven chapters use a reusable full-guide chapter renderer.

## Deployment Note

This GitHub repository is the source code for the app. It is not necessarily the live deployed app
unless a deployment target has been configured separately.

Live app link: not configured in this repo yet. When a deployment URL exists, add it here and set
`VITE_PUBLIC_APP_URL` so the homepage can show the live app destination.

## Image Sourcing

The app does not require Owen to take every screenshot or photo himself. Image placeholders can be
matched to official Genesis/manufacturer references, owner photos, manual screenshots, or clearly
licensed/public-domain assets where legally appropriate.

Do not copy third-party review photos into the repo unless permission or license clarity exists.
When licensing is unclear, keep the image as a source-candidate URL/reference instead of bundling
the file.

Preferred exterior imagery should show a 2023 Genesis GV60 Performance in Atacama Copper or
Atacama Copper Matte when available. If exact Atacama Copper imagery is unavailable, use this
fallback order:

1. Same generation GV60 Performance in a similar copper/orange tone
2. Same generation GV60 Performance in another color
3. Same generation GV60 exterior official image
4. Generic GV60 image as external reference only

Some vehicle UI screens may remain placeholders until official/manual screenshots or owner captures
are available and reviewed.
