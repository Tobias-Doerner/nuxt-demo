module.exports = {
  extends: [
    '@nuxt/eslint-config',
    'plugin:@intlify/vue-i18n/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/require-default-prop': 'off',
    '@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error',
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-missing-keys': 'error',
    '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
    '@intlify/vue-i18n/no-unused-keys': [
      'warn',
      {
        extensions: ['.js', '.ts', '.vue'],
      },
    ],
  },
  settings: {
    'vue-i18n': {
      localeDir: './i18n/*.{json,json5,yaml,yml}',
      messageSyntaxVersion: '^9.0.0',
    },
  },
}
