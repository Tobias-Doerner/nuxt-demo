// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/i18n'],
  ssr: false,
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
        iso: 'de-DE',
        name: 'Deutsch',
      },
      {
        code: 'en',
        file: 'en-US.json',
        iso: 'en-US',
        name: 'English',
      },
    ],
    strategy: 'no_prefix',
  },
})
