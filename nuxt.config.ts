// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-11-11',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  vite: {
    optimizeDeps: {
      include: ['unhead', '@unhead/vue']
    }
  },
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      {
        code: 'fr',
        file: 'fr.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'fr',
    strategy: 'no_prefix'
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  // Configuration pour le mode développement
  dev: process.env.NODE_ENV !== 'production',
  app: {
    head: {
      title: 'WINK - Créez votre espace de travail',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})

