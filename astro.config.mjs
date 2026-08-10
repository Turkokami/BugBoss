import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain. Update if the new build launches on a different host.
export default defineConfig({
  site: 'https://bugbosswi.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
