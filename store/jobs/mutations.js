/**
 * Mutations of the jobs store module.
 */
export default {
  /**
   * Mutation for adding an array of jobs to the state.
   *
   * @param {object} state - VUEX state object.
   * @param {array}  jobs  - Array containing job objects.
   */
  ADD_JOBS(state, jobs) {
    state.jobs = state.jobs.concat(jobs)
  },

  /**
   * Mutation for resetting the state to initial values.
   *
   * @param {object} state - VUEX state object.
   */
  CLEAR(state) {
    state.jobs = []
  }
}
