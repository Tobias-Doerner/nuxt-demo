import VueI18nPlugin from '@intlify/unplugin-vue-i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/i18n'],
  ssr: false,
  vite: {
    plugins: [VueI18nPlugin.vite({})],
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
