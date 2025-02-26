import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { readFileSync } from "node:fs";
import mdx from "@astrojs/mdx";
import compressor from "astro-compressor";
import { remarkReadingTime } from "./src/utils.ts";
import markdownConfig from "./markdown.config.ts";
import remarkToc from "remark-toc";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [tailwind({ applyBaseStyles: false }), compressor(), mdx(), react(), sitemap()],
  image: {
    service: sharpImageService(),
  },
  site: "https://enochmok.vercel.app",
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  markdown: {
    remarkPlugins: [remarkReadingTime, [remarkToc, { heading: "contents" }]],
  },
});