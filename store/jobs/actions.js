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
    const promises = []
    const pages = 5

    for (let i = 1; i <= pages; i++) {
      promises.push(
        this.$axios
          .get('/github/positions.json?page=' + i)
          .then((res) => {
            if (res.status === 200) commit('ADD_JOBS', res.data)
          })
          .catch((e) => {})
      )
    }

    await Promise.all(promises)
  }
}
