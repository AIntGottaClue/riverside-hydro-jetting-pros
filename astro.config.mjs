import { defineConfig } from 'astro/config';

// Real domain by default. The GitHub Pages workflow sets BASE=/riverside-hydro-jetting-pros for the preview.
export default defineConfig({
  site: 'https://riversidehydrojetting.prosapp.site',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
