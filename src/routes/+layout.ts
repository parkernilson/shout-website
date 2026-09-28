// Client-side rendered: no SSR, but prerender an HTML shell for each route
// so static hosts can serve /privacy and /terms directly.
export const ssr = false;
export const prerender = true;
