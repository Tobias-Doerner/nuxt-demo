import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import { setupI18n } from '@/test/i18n'
import { setupVuetify } from '@/test/vuetify'

import TheFooter from '@/components/TheFooter.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
const i18n = setupI18n(localVue)
const vuetify = setupVuetify(localVue)

describe('TheFooter.vue', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(TheFooter, {
      localVue,
      i18n,
      vuetify,
      mocks: {
        $config: {
          version: '1.0.0'
        }
      }
    })
  })

  it('should match with snapshot', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
