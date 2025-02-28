// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        context: "server",
        access: "public",
        default: true,
      }),
      SHOW_BOOK_SCORE: envField.string({ context: "client", access: "public" }),
    },
  },
});
