import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cabinet-lanotebleue-nantes.fr',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
