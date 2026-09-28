# Shout

Shout is a simple SMS announcement service for the local community. Residents opt in to receive text announcements and can opt out at any time by replying **STOP**.

This repo contains the Shout website, built with SvelteKit, TypeScript, and Tailwind CSS.

## Development

```sh
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Quality checks

```sh
npm run check    # type-check
npm run lint     # prettier + eslint
npm run format   # auto-format
```

## Project structure

- `src/routes/` — pages and layouts
- `src/lib/` — shared code (imported via `$lib`)
- `static/` — static assets

## Deployment

Uses `@sveltejs/adapter-auto`. Swap in a specific [adapter](https://svelte.dev/docs/kit/adapters) for your hosting target if needed.

## AI agents

See `AGENTS.md`. Claude Code users can run `/svelte-task <task>` (defined in `.claude/commands/svelte-task.md`), which requires the [Svelte MCP server](https://svelte.dev/docs/ai/overview).
