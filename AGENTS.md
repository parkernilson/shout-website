# AGENTS.md

Guidance for AI agents working in this repo.

## Project

Shout is a simple SMS announcement service for the local community: users opt in via a paper or online sign-up sheet or verbally in person, confirm by replying YES to a confirmation text (two-way SMS on AWS), and opt out by texting STOP. This repo is its SvelteKit website (Svelte 5, TypeScript, Tailwind CSS 4). The site is client-side rendered (`ssr = false`) and built with `adapter-static` and deployed to GitHub Pages (custom domain `shout.parkernilson.dev`) by `.github/workflows/deploy.yml` on every push to `main`. Pages: landing (`/`), `/privacy`, `/terms`. Shared details (toll-free number, contact email, confirm keyword, sign-up sheet consent statement, verbal sign-up script, confirmation text) live in `src/lib/config.ts`; see "SMS opt-in flow" in `README.md`. A Cognito-authenticated admin dashboard is planned (managed login, authorization code + PKCE via `aws-amplify/auth`, API calls via `aws-amplify/api` with an `Authorization` header set in `Amplify.configure`, callback `https://shout.parkernilson.dev/` and `http://localhost:5173/`, calling an API Gateway HTTP API with a JWT authorizer); see "Admin dashboard" in `README.md`. Its AWS backend is in the sibling `shout-cdk` repo. See `README.md` for commands and structure.

## Rules

- **Keep docs current.** Whenever you make a change, update `AGENTS.md`, `README.md`, and any other relevant documentation in the same change so they reflect the new state of the project.
- Keep things simple; this is a small project.
- Before finishing, run `npm run check` and `npm run lint` (use `npm run format` to fix formatting).
- The site is branded **Shout**. Keep the footer line "Shout is operated by Parker Todd Nilson" (`site.name` / `site.operator`); it links the operator's legal name to the brand.
- Never remove or obscure the STOP opt-out instructions; clear opt-in/opt-out wording is required for SMS compliance.
- The dashboard is a public browser client: never put client secrets or AWS credentials in the site. The Cognito IDs, domain, and API URL are public config in `src/lib/config.ts`. Keep auth changes (callback URLs, CORS origins, API routes) in sync with `shout-cdk`, and update both repos' docs.
- The privacy policy and terms back the AWS toll-free number verification. Keep the required disclosures: opt-in methods (paper/online sign-up sheet or verbal script, each followed by the YES confirmation), message frequency, "message and data rates may apply", HELP/STOP instructions, contact info, and the statement that mobile/opt-in data is not shared with third parties for marketing.

# Tools

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
