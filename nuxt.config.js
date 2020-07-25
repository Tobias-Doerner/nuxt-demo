import de from 'vuetify/es5/locale/de'
import en from 'vuetify/es5/locale/en'
import pkg from './package'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript!' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/fonts.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/vuetify.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
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
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
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
  vuetify: {
    lang: {
      locales: { de, en },
      current: 'de'
    }
  },
  moment: {
    locales: ['de']
  },
  pwa: {
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
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
