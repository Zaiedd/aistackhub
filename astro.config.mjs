import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aistackhub.pages.dev',
  integrations: [sitemap()],
  output: 'static',
});
