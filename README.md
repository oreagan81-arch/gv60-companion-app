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
