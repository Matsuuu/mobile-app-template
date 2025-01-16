import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const iconsPath = "node_modules/@shoelace-style/shoelace/dist/assets/icons";

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    alias: [
      {
        find: /\/assets\/icons\/(.+)/,
        replacement: `${iconsPath}/$1`,
      },
    ],
  },
  build: {
    rollupOptions: {
      // external: /^lit/,
      plugins: [],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: iconsPath,
          dest: "assets",
        },
      ],
    }),
  ],
});
