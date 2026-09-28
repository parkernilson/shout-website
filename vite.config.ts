import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Static, client-side rendered site. Every route is emitted as its own HTML file,
			// with 200.html as the SPA fallback. See https://svelte.dev/docs/kit/single-page-apps
			adapter: adapter({ fallback: '200.html' })
		})
	]
});
