// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Commissioner:wght@400;700&family=Play:wght@700&display=swap" },
      ],
    },
  },
  css: [
    'normalize.css',
  ],
  modules: [
    '@nuxt/content',
    'nuxt-icons',
  ],
  devtools: { enabled: true },
})
