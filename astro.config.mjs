// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aicomparehub.blog',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2026-04-02'),
      serialize(item) {
        if (item.url === 'https://aicomparehub.blog/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        if (item.url.includes('/privacy')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        if (item.url.includes('/about')) {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
});
