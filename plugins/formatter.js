import Vue from 'vue'

const DE_DATE = 'DD.MM.YY'
const EN_DATE = 'D/M/YY'
const DE_TIME = 'HH:mm:ss'
const EN_TIME = 'h:mm:ss a'

function getDateTimeFormatString(locale) {
  if (locale === 'de') return `${DE_DATE} ${DE_TIME}`
  if (locale === 'en') return `${EN_DATE} ${EN_TIME}`
  return `${DE_DATE} ${DE_TIME}`
}

export default (ctx) => {
  Vue.filter('formatDateTime', (value) => {
    if (value === null || value === '' || value === 0) return ''
    return ctx
      .$moment(Date.parse(value))
      .utc()
      .format(getDateTimeFormatString(ctx.store.$i18n.locale))
  })
}
