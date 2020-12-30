/**
 * Getters of the jobs store module.
 */
export default {
  getCompanies: (state) => {
    const companies = new Set()
    state.jobs.forEach((job) => companies.add(job.company))
    return Array.from(companies).sort((a, b) => a.localeCompare(b))
  },

  getJobs: (state) => {
    return [...state.jobs].sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  },

  getLocations: (state) => {
    const locations = new Set()
    state.jobs.forEach((job) => locations.add(job.location))
    return Array.from(locations).sort((a, b) => a.localeCompare(b))
  }
}
