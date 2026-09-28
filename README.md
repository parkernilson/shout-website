# Shout

Shout is a simple SMS announcement service for the local community. Residents sign up on a paper sign-up sheet, confirm by replying **YES** to a confirmation text, and can opt out at any time by replying **STOP**.

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

- `src/routes/+page.svelte` — landing page (sign-up process, sign-up sheet consent wording, confirmation text, how to opt out)
- `src/routes/privacy/` — privacy policy
- `src/routes/terms/` — terms and conditions
- `src/routes/+layout.svelte` — shared header/footer; `+layout.ts` disables SSR (client-side rendered) and prerenders each route's HTML shell
- `src/lib/config.ts` — site details (operator, toll-free number, contact email, confirm keyword, message frequency, last-updated date), plus the sign-up sheet consent statement and the confirmation text. Contact info on the site is email-only; never add a personal phone number.

## SMS opt-in flow

1. **Sign-up sheet (written opt-in).** People write their name and mobile number on a paper sheet printed with the consent statement from `signupConsent` in `src/lib/config.ts`.
2. **Confirmation text.** Each number gets one message (`confirmationMessage`) from the toll-free number +1 (844) 493-3651 asking them to reply **YES**. Nothing else is sent until they reply.
3. **YES reply.** Requires **two-way SMS** to be enabled on the number in AWS End User Messaging so replies reach an SNS topic; only numbers that reply YES get announcements. Keep records of sign-up dates and YES replies.
4. **Opt-out.** On US toll-free numbers, **STOP** and **UNSTOP** are handled by the carriers automatically and can't be customized. Configure a **HELP** response in AWS that includes the contact email.

If you change the sign-up wording, update the printed sheet, `config.ts`, and the AWS toll-free registration together.

- `static/` — static assets

## Deployment

Uses `@sveltejs/adapter-static`. `npm run build` writes a static site to `build/` (`index.html`, `privacy.html`, `terms.html`, plus `404.html` as the SPA fallback).

The site is hosted on **GitHub Pages** at <https://shout.parkernilson.dev>. `.github/workflows/deploy.yml` runs `check`, `lint`, and `build` on every push to `main` (or a manual run) and deploys `build/` with GitHub Actions.

One-time setup:

1. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
2. Under **Settings → Pages → Custom domain**, enter `shout.parkernilson.dev` and save (`static/CNAME` holds the same value). Once the certificate is issued, enable **Enforce HTTPS**.
3. At your DNS provider, add a `CNAME` record: `shout` → `parkernilson.github.io`.
4. Optional but recommended: verify `parkernilson.dev` under your GitHub account's **Settings → Pages** to prevent domain takeover.

## AI agents

See `AGENTS.md`. Claude Code users can run `/svelte-task <task>` (defined in `.claude/commands/svelte-task.md`), which requires the [Svelte MCP server](https://svelte.dev/docs/ai/overview).
