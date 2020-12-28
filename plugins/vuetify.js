import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import de from 'vuetify/es5/locale/de'
import en from 'vuetify/es5/locale/en'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  customVariables: ['~/assets/variables.scss'],
  lang: {
    locales: { de, en },
    current: 'de'
  },
  theme: {
    options: {
      customProperties: true
    },
    dark: false,
    themes: {
      light: {
        primary: colors.indigo.base,
        secondary: colors.blueGrey.base,
        accent: colors.orange.base,
        error: colors.red.base,
        warning: colors.amber.base,
        info: colors.lightGreen.base,
        success: colors.green.base
      }
    }
  },
  treeShake: true
})
