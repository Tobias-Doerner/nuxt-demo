import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import de from 'vuetify/es5/locale/de'
import en from 'vuetify/es5/locale/en'

export function setupVuetify(vueInstance) {
  return new Vuetify({
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
          accent: colors.orange.darken4,
          heading: colors.blueGrey.darken1,
          error: colors.red.base,
          footing: colors.blueGrey.darken1,
          info: colors.lightGreen.base,
          menus: colors.blueGrey.lighten4,
          primary: colors.indigo.base,
          secondary: colors.blueGrey.base,
          success: colors.green.base,
          warning: colors.amber.base
        }
      }
    },
    treeShake: true
  })
}
