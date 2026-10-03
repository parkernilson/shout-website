# Shout

Shout is a simple SMS announcement service for the local community. Residents sign up on a paper or online sign-up sheet or verbally in person, confirm by replying **YES** to a confirmation text, and can opt out at any time by replying **STOP**.

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

- `src/routes/+page.svelte` — landing page (sign-up process, sign-up sheet consent wording, verbal sign-up script, confirmation text, how to opt out)
- `src/routes/privacy/` — privacy policy
- `src/routes/terms/` — terms and conditions
- `src/routes/+layout.svelte` — shared header/footer; `+layout.ts` disables SSR (client-side rendered) and prerenders each route's HTML shell
- `src/lib/config.ts` — site details (operator's full legal name, toll-free number, contact email, confirm keyword, message frequency, last-updated date), plus the sign-up sheet consent statement (`signupConsent`), the verbal sign-up script (`verbalScript`), and the confirmation text (`confirmationMessage`). Contact info on the site is email-only; never add a personal phone number.

## SMS opt-in flow

1. **Sign-up.** People give their name and mobile number in one of two ways:
   - **Sign-up sheet (paper or online).** The sheet shows the consent statement from `signupConsent` in `src/lib/config.ts`.
   - **Verbally, in person.** The operator reads `verbalScript` aloud first, then records the name, number, date, and that the script was read.
2. **Confirmation text.** However the number was collected, it gets one message (`confirmationMessage`) from the toll-free number +1 (844) 493-3651 asking the person to reply **YES**. Nothing else is sent until they reply.
3. **YES reply.** Requires **two-way SMS** to be enabled on the number in AWS End User Messaging so replies reach an SNS topic; only numbers that reply YES get announcements. Keep records of sign-up dates and YES replies.
4. **Opt-out.** On US toll-free numbers, **STOP** and **UNSTOP** are handled by the carriers automatically and can't be customized. Configure a **HELP** response in AWS that includes the contact email.

If you change the sign-up wording, update the paper and online sheets, the verbal script, `config.ts`, and the AWS toll-free registration together.

- `static/` — static assets

## Admin dashboard (planned)

A signed-in admin dashboard will let the operator manage channels, see each channel's receivers (name, phone number, status), manually add or remove numbers (adding a number that has never been invited sends it the `confirmationMessage` invitation), and send announcements to a channel's subscribed receivers. The AWS side (Cognito, API Gateway, Lambdas, DynamoDB) is defined in the sibling `shout-cdk` repo; see its `README.md`.

- **Auth:** Cognito user pool with self-sign-up turned off; admin users are created by hand. Sign-in uses Cognito **managed login** with an app client that has **no client secret**, using the **authorization code flow with PKCE** (scopes `openid`, `email`).
- **Callback / sign-out URLs:** `https://shout.parkernilson.dev/` in production and `http://localhost:5173/` for development (`npm run dev`). Because the callback is the site root, Amplify must be configured in the root layout so the redirect is handled on `/`.
- **Library:** the `aws-amplify` package (not installed yet), configured once with `Amplify.configure()`:
  - `Auth.Cognito`: `userPoolId`, `userPoolClientId`, and `loginWith.oauth` with the Cognito `domain`, `scopes`, `redirectSignIn`/`redirectSignOut` set to the URLs above, and `responseType: 'code'`.
  - `API.REST`: the HTTP API as a named endpoint (`endpoint` = API URL, `region: 'us-west-1'`).
  - Library options (second argument): `API.REST.headers`, an async function that returns `{ Authorization: <access token> }` from `fetchAuthSession()`. This attaches the token to every API call.

  Use `signInWithRedirect()`, `signOut()`, `getCurrentUser()`, and `fetchAuthSession()` from `aws-amplify/auth`, and `get`/`post`/`put`/`del` from `aws-amplify/api` for API calls.

- **API calls:** the dashboard Lambdas sit behind an **API Gateway HTTP API** with a **JWT authorizer** on the user pool. Make all API calls through `aws-amplify/api` so the `headers` function adds the token. Without that function, Amplify tries to sign requests with IAM (Cognito identity pool) credentials, which this setup doesn't use, so the calls would fail. CORS on the API allows `https://shout.parkernilson.dev` (and `http://localhost:5173` for development).
- **Config:** the user pool ID, app client ID, Cognito domain, and API URL come from the `shout-cdk` stack outputs and belong in `src/lib/config.ts`. They are public identifiers, not secrets; never put AWS credentials or secrets in the site.

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
