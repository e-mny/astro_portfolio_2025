import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { readFileSync } from "node:fs";
import mdx from "@astrojs/mdx";
import compressor from "astro-compressor";
import { remarkReadingTime } from "./src/utils.ts";
import markdownConfig from "./markdown.config.ts";
import remarkToc from "remark-toc";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compressor(), mdx(), react()],
  image: {
    service: sharpImageService(),
  },
  site: "https://cojocarudavid.me",
  vite: {
    plugins: [rawFonts([".ttf", ".woff"])],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  // markdown: {markdownConfig,
  // integrations: [
  //   mdx({
  //     ...markdownConfig,
  //     extendPlugins: false,
  //   }),
  // ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      [remarkToc, { heading: "contents"} ],
    ],
  },
});

// vite plugin to import fonts
function rawFonts(ext) {
  return {
    name: "vite-plugin-raw-fonts",
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
}