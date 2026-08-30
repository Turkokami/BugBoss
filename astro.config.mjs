import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain. Update if the new build launches on a different host.
export default defineConfig({
  site: 'https://bugbosswi.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // The whole site's CSS is ~12 KB. Fetching it costs a round trip (~150ms on
    // Lighthouse's Slow 4G) to save less than it costs, and it render-blocks
    // while it happens. Inlining removes the request entirely.
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});
