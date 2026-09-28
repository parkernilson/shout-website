# AGENTS.md

Guidance for AI agents working in this repo.

## Project

Shout is a simple SMS announcement service for the local community: users opt in to receive announcements and opt out by texting STOP. This repo is its SvelteKit website (Svelte 5, TypeScript, Tailwind CSS 4). See `README.md` for commands and structure.

## Rules

- **Keep docs current.** Whenever you make a change, update `AGENTS.md`, `README.md`, and any other relevant documentation in the same change so they reflect the new state of the project.
- Keep things simple; this is a small project.
- Before finishing, run `npm run check` and `npm run lint` (use `npm run format` to fix formatting).
- Never remove or obscure the STOP opt-out instructions; clear opt-in/opt-out wording is required for SMS compliance.
