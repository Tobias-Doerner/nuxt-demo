import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import { setupI18n } from '@/test/i18n'
import { setupVuetify } from '@/test/vuetify'

import LangSwitcher from '@/components/LangSwitcher.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
const i18n = setupI18n(localVue)
const vuetify = setupVuetify(localVue)

describe('LangSwitcher', () => {
  const cmp = mount(LangSwitcher, {
    localVue,
    i18n,
    vuetify
  })

  describe('testing the computed properties', () => {
    it('should return computed properties as expected', () => {
      expect(cmp.vm.availableLocales).toEqual([
        {
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js',
          name: 'english'
        }
      ])
      expect(cmp.vm.currentUsedLocale).toEqual('de')
    })
  })

  describe('testing the methods', () => {
    it('should change the language used by vuetify and i18n', () => {
      const spySetLocale = jest
        .spyOn(i18n, 'setLocale')
        .mockImplementation((locale) => {})
      const spySetCookie = jest
        .spyOn(i18n, 'setLocaleCookie')
        .mockImplementation((locale) => {})

      expect(vuetify.framework.lang.current).toEqual('de')
      cmp.vm.setLocale('en')
      expect(spySetLocale).toHaveBeenCalled()
      expect(spySetCookie).toHaveBeenCalled()
      expect(vuetify.framework.lang.current).toEqual('en')

      spySetLocale.mockRestore()
      spySetCookie.mockRestore()
    })
  })
})
