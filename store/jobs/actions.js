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

    for (let i = 1; i < pages + 1; i++) {
      promises.push(
        this.$axios
          .get('/github/positions.json?page=' + i)
          .then((res) => {
            const payload = res.data.map((el) => {
              return {
                id: el.id,
                company: el.company,
                title: el.title,
                location: el.location,
                type: el.type,
                description: '',
                creationDate: el.created_at
              }
            })
            commit('ADD_JOBS', payload)
          })
          .catch((e) => {})
      )
    }

    await Promise.all(promises)
  },

  /**
   * Action for retrieving a job specified by it's ID from the REST API.
   *
   * @param {object} commit - VUEX commit object.
   * @param {number} id     - ID of a job.
   * @async
   */
  async GET_JOB({ commit }, id) {
    await this.$axios
      .get('/github/positions/' + id + '.json')
      .then((res) => {
        commit('SET_DESCRIPTION', {
          id: res.data.id,
          description: res.data.description
        })
      })
      .catch((e) => {})
  }
}
