import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      outDir: ".output/public",
      strategies: "generateSW",
      registerType: "autoUpdate",
      injectRegister: false,
      manifest: false,
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: null,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "gushu-app-pages",
              networkTimeoutSeconds: 3,
              expiration: { maxEntries: 20 },
            },
          },
          {
            urlPattern: ({ url, request }) =>
              url.origin === self.location.origin &&
              ["script", "style", "font", "image"].includes(request.destination),
            handler: "CacheFirst",
            options: {
              cacheName: "gushu-static-assets",
              expiration: { maxEntries: 150, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
  nitro: true,
  tanstackStart: {
    server: { entry: "server" },
  },
  build: {
    target: "es2022",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;

          if (id.includes("emoji-picker-react")) return "emoji-picker";
          if (id.includes("@tanstack/react-query") || id.includes("@tanstack/react-router") || id.includes("@tanstack/router-core")) return "tanstack-core";
          if (id.includes("@radix-ui")) return "radix-ui";
          if (id.includes("react") || id.includes("react-dom")) return "react-vendor";
          if (id.includes("@supabase")) return "supabase";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("sonner")) return "toast";
          if (id.includes("recharts") || id.includes("framer")) return "charts";

          return "vendor";
        },
      },
    },
  },
});