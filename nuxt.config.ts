const baseURL = process.env.NUXT_APP_BASE_URL || "/"

export default defineNuxtConfig({
  compatibilityDate: "2026-07-14",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: "ru",
        class: "dark",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;700&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
        },
      ],
    },
  },
})
