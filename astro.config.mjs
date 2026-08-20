// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Ganti dengan URL GitHub Pages Anda, contoh: 'https://username.github.io'
  site: 'https://tegarpenemuann.github.io',
  // Ganti '/portofolio/' dengan nama repository Anda.
  // - Jika repo bernama "<username>.github.io" gunakan base: '/'
  // - Jika repo lain (misal "portofolio"), URL jadi https://username.github.io/portofolio/
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});