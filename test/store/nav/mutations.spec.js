import mutations from '@/store/nav/mutations'

describe('VUEX mutations of the nav module', () => {
  let state

  beforeEach(() => {
    state = {
      clipped: false,
      drawer: false
    }
  })

  describe('mutation for setting the clipped state to the store', () => {
    it('should set the clipped state to store', () => {
      mutations.SET_CLIPPED(state, true)
      expect(state.clipped).toEqual(true)
      mutations.SET_CLIPPED(state, false)
      expect(state.clipped).toEqual(false)
    })
  })

  describe('mutation for setting the drawer state to the store', () => {
    it('should set the drawer state to store', () => {
      mutations.SET_DRAWER(state, true)
      expect(state.drawer).toEqual(true)
      mutations.SET_DRAWER(state, false)
      expect(state.drawer).toEqual(false)
    })
  })
})
