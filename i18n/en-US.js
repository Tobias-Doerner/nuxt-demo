export default {
  appbar: {
    title: 'Nuxt.js'
  },
  common: {
    home: 'Home',
    jobs: 'Jobs'
  },
  footer: {
    description:
      'Nuxt.js demo application, developed by Tobias Dörner, visit me on my social media channels.',
    title: 'Nuxt.js Showcase'
  },
  formatter: {
    datetime: 'D/M/YY h:mm:ss a'
  },
  page: {
    index: {
      btn: {
        repo: 'Get the source code'
      },
      details:
        '<p>Showcase application to show how to leverage the Nuxt.js framework.</p>' +
        'Covered Topics:' +
        '<ul>' +
        '<li>Routing</li>' +
        '<li>I18n</li>' +
        '<li>Using Vuex for state management</li>' +
        '<li>Retrieving data from REST API with the axios REST client</li>' +
        '<li>Applying Material Design with Vuetify</li>' +
        '<li>Using the library Moment.js to work with date objects</li>' +
        '<li>Using Jest for testing</li>' +
        '<li>Linting with ESLint</li>' +
        '<li>Auto code formatting with Prettier</li>' +
        '</ul>',
      subtitle: 'Showcase Application',
      title: 'Nuxt.js'
    },
    job: {
      filter: {
        companies: 'Companies',
        locations: 'Locations'
      }
    },
    error: {
      link: 'Back to start',
      'other error': 'An error occurred!',
      'page not found': 'Page not found!'
    }
  },
  settings: {
    darkmode: 'Dark Mode',
    language: 'Language',
    title: 'Settings'
  }
}
