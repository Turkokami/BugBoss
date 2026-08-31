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
  integrations: [
    sitemap({
      // A noindex page in the sitemap is a contradiction: it asks Google to
      // crawl something the page itself tells it not to index, and Search
      // Console reports it as an error. /thank-you/ is reached by a form
      // redirect and is deliberately noindex, so it does not belong here.
      filter: (page) => !page.includes('/thank-you/'),
    }),
  ],
});
