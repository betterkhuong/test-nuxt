// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "nuxt-gtag",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxtjs/i18n",
  ],
  image: {
    quality: 70,
    format: ["webp"],
    screens: {
      xs: 512,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    presets: {
      before_after: {
        modifiers: {
          width: 512,
        },
      },
    },
    densities: [1, 2],
    provider: "cloudflare",
    cloudflare: { baseURL: "https://cdn.betterpic.io" },
  },
  vite: {
    build: {
      target: "esnext",
    },
  },
  nitro: {
    preset: "vercel",
  },
  content: {
    markdown: {
      rehypePlugins: {
        "rehype-external-links": false,
      },
    },
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  i18n: {
    lazy: true,
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
        files: ["en/home.json"],
      },
      {
        code: "es",
        language: "es-ES",
        name: "Spanish",
        files: ["es/home.json"],
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
});
