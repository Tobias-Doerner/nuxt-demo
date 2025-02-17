export default defineI18nConfig(() => ({
  availableLocales: ['de', 'en'],
  fallbackLocale: 'en',
  fallbackWarn: true,
  globalInjection: true,
  legacy: false,
  missingWarn: true,
}))
