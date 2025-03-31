import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'Mythoscape - Fantasy Landscape Gallery',
      meta: [
        { name: 'description', content: 'A Nuxt-powered slider showcasing stunning fantasy landscape art and cinematic views.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/logo/favicon.ico' }
      ]
    }
  }
});