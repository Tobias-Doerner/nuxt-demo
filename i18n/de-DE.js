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
      'Nuxt.js Demo-Anwendung, erstellt von Tobias Dörner, besucht mich auf meinen Social Media Kanälen.',
    title: 'Nuxt.js Showcase'
  },
  formatter: {
    datetime: 'DD.MM.YY HH:mm:ss'
  },
  page: {
    index: {
      btn: {
        repo: 'Hole dir den Quellcode'
      },
      details:
        '<p>Showcase Anwendung zur Veranschaulichung der Fähigkeiten des Nuxt.js Frameworks.</p>' +
        'Abgedeckte Themen:' +
        '<ul>' +
        '<li>Routing</li>' +
        '<li>I18n</li>' +
        '<li>State Management mit Vuex</li>' +
        '<li>Verwendung von Axios REST Client zur Kommunikation mit REST Services</li>' +
        '<li>Material Design mit dem Komponentenframe Vuetify umsetzen</li>' +
        '<li>Umgang mit Datum und Uhrzeit Objekten mit Hilfe der Bibliothek Moment.js</li>' +
        '<li>Testing mit Jest</li>' +
        '<li>Code-Linting mit ESLint durchführen</li>' +
        '<li>Autoformatierung des Quellcodes mit Prettier</li>' +
        '</ul>',
      subtitle: 'Demo Applikation',
      title: 'Nuxt.js'
    },
    job: {
      filter: {
        companies: 'Firmen',
        locations: 'Orte'
      }
    },
    error: {
      link: 'Zurück zum Start',
      'other error': 'Ein Fehler ist aufgetreten!',
      'page not found': 'Seite nicht gefunden!'
    }
  },
  settings: {
    darkmode: 'Nachtmodus',
    language: 'Sprache',
    title: 'Einstellungen'
  }
}
