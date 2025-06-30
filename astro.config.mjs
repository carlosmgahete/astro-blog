// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://munga-blog.netlify.app",
  integrations: [preact(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});