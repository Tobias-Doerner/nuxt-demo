/**
 * Getters of the jobs store module.
 */
export default {
  /**
   * Getter for retrieving the jobs array from the state.
   */
  getJobs: (state) => {
    return state.jobs.map((job) => {
      return {
        company: job.company,
        location: job.location,
        id: job.id,
        title: job.title,
        type: job.type,
        description: job.description,
        creationDate: job.creationDate
      }
    })
  }
}
