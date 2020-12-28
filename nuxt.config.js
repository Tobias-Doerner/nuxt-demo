import colors from 'vuetify/es5/util/colors'
import pkg from './package'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: pkg.author },
      { name: 'description', content: pkg.description, hid: 'description' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript!' }],
    title: pkg.name,
    titleTemplate: '%s - nuxt-latest-demo'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vuetify.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { defaultAssets: false }],
    '@nuxtjs/moment'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    'nuxt-i18n'
  ],

  proxy: {
    '/github/': {
      target: 'https://jobs.github.com',
      pathRewrite: {
        '^/github': '/'
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },

  /*
   ** nuxt-i18n module configuration
   *  See https://nuxt-community.github.io/nuxt-i18n/
   */
  i18n: {
    vueI18n: {
      silentFallbackWarn: true
    },
    locales: [
      { code: 'de', iso: 'de-DE', file: 'de-DE.js', name: 'deutsch' },
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'english' }
    ],
    lazy: true,
    langDir: 'i18n/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      alwaysRedirect: true,
      fallbackLocale: 'en'
    },
    vuex: {
      moduleName: 'i18n',
      syncLocale: true,
      syncMessages: false,
      syncRouteParams: false
    },
    vueI18nLoader: true
  },

  moment: {
    locales: ['de']
  },

  pwa: {
    manifest: {
      author: pkg.author,
      name: pkg.description,
      short_name: pkg.name,
      start_url: '/',
      theme_color: colors.blueGrey.base
    },
    workbox: {
      config: {
        debug: false
      },
      runtimeCaching: [
        {
          urlPattern: 'https://amazing-nuxt-demo.herokuapp.com/github/.*',
          strategyOptions: {
            cacheName: 'github-cache',
            cacheExpiration: {
              maxEntries: 300,
              maxAgeSeconds: 300
            }
          }
        }
      ]
    }
  },
  serverMiddleware: ['redirect-ssl'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
