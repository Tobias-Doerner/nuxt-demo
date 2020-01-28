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
   * Mutation for setting the description of a job to the state.
   *
   * @param {object} state - VUEX state object.
   * @param {object} job   - Object of a job.
   */
  SET_DESCRIPTION(state, job) {
    const index = state.jobs.findIndex((el) => el.id === job.id)
    if (index > -1) {
      state.jobs[index].description = job.description
    }
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
