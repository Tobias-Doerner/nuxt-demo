import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Moment from 'moment'
import { createLocalVue, mount } from '@vue/test-utils'
import { setupI18n } from '@/test/i18n'
import { setupVuetify } from '@/test/vuetify'

import JobDataTable from '@/components/jobs/JobDataTable.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
const i18n = setupI18n(localVue)
const vuetify = setupVuetify(localVue)

describe('jobs', () => {
  let spy

  beforeAll(() => {
    spy = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    spy.mockRestore()
  })

  it('should match with snapshot', () => {
    const store = setupStore()
    const cmp = mount(JobDataTable, {
      localVue,
      store,
      i18n,
      vuetify,
      mocks: {
        $moment: Moment
      }
    })

    expect(cmp.element).toMatchSnapshot()
  })
})

function setupStore() {
  const state = {
    jobs: [
      {
        id: '3ac51201-9e28-4db5-9c91-2392988f97cb',
        company: 'European Molecular Biology Laboratory (EMBL)',
        title: 'Web Backend Developer',
        location: 'Heidelberg, Germany',
        type: 'Full Time',
        description: '',
        creationDate: Moment(Date.parse('Mon Jan 20 13:47:11 UTC 2020'))
      },
      {
        id: '93b19641-8985-4591-a430-11ec8cd19802',
        company: 'NCIC Inmate Communications',
        title: 'Software Engineer',
        location: 'Longview, TX',
        type: 'Full Time',
        description: '',
        creationDate: Moment(Date.parse('Mon Jan 20 15:00:12 UTC 2020'))
      },
      {
        id: '87adc96f-5e2b-424a-a3b4-86e71735ed71',
        company: 'Reaktor',
        title: 'Senior Software Engineer',
        location: 'New York',
        type: 'Full Time',
        description: '',
        creationDate: Moment(Date.parse('Fri Jan 24 08:54:17 UTC 2020'))
      }
    ]
  }

  const mutations = {
    'jobs/ADD_JOBS': (payload) => jest.fn(),
    'jobs/SET_DESCRIPTION': (payload) => jest.fn(),
    'jobs/CLEAR': (payload) => jest.fn()
  }

  const getters = {
    'jobs/getJobs': (state) => {
      return state.jobs
    }
  }

  const actions = {
    'jobs/GET_JOBS': (dispatch) => Promise.resolve()
  }

  return new Vuex.Store({ state, actions, getters, mutations })
}
