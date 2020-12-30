/**
 * Actions of the jobs store module.
 */
export default {
  /**
   * Action for retrieving jobs from the REST API.
   *
   * @param {object} commit - VUEX commit object.
   * @async
   */
  async GET_JOBS({ commit }) {
    const pages = 20

    for (let i = 1; i <= pages; i++) {
      const res = await this.$axios.get('/github/positions.json?page=' + i)
      if (res.status === 200 && res.data.length > 0) {
        commit('ADD_JOBS', res.data)
      } else {
        break
      }
    }
  }
}
