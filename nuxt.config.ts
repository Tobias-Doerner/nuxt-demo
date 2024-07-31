// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-07-04',
  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],
  nitro: {
    compressPublicAssets: true,
  },
  ssr: false,
  eslint: {
    config: {
      standalone: false,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
      useCookie: true,
    },
    langDir: 'i18n',
    lazy: true,
    locales: [
      {
        code: 'de',
        file: 'de-DE.json',
        language: 'de-DE',
        name: 'Deutsch',
      },
      {
        code: 'en',
        file: 'en-US.json',
        language: 'en-US',
        name: 'English',
      },
    ],
    strategy: 'no_prefix',
  },
})
