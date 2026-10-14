// @ts-check
import { defineConfig } from 'astro/config';

// Statický build pre GitHub Pages na vlastnej subdoméne (bez `base`).
export default defineConfig({
  site: 'https://elektrikar.esticode.sk',
});
