import { defineConfig } from 'astro/config';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://betonjeanette.github.io/",
  base: "/Portfolio",
  integrations: [solidJs()]
});