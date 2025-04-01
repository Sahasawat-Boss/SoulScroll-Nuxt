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
      title: 'SoulScroll',
      meta: [
        { name: 'description', content: 'SoulScroll is an immersive Nuxt-powered slider that transports you through breathtaking fantasy landscapes and cinematic realms, one scroll at a time.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/logo/favicon.ico' }
      ]
    }
  }
});