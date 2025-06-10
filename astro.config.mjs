import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-frontend-masters.netlify.app',
  integrations: [react({include: ['**/react/*']}), solid({include: ['**/solid/*']})]
});