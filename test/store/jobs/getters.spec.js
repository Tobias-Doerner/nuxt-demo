import getters from '@/store/jobs/getters'

describe('VUEX getters of the jobs module', () => {
  describe('getter for retrieving the jobs array from store', () => {
    it('should return jobs array correctly', () => {
      const state = {
        jobs: [
          {
            id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
            type: 'Full Time',
            company: 'Umbrella Corporation',
            location: 'Racoon City',
            title: 'Senior Software Developer',
            description: ''
          },
          {
            id: '433bfb2c-ec2a-40f9-b2ef-a7b65ee740da',
            type: 'Full Time',
            company: 'Weyland-Yutani',
            location: 'New York',
            title: 'Senior Full Stack Software Engineer',
            description: ''
          },
          {
            id: '01ce26dc-6909-4af9-246e-a7e7ce9970af',
            type: 'Full Time',
            company: 'Triton Dynamics',
            location: 'San Francisco',
            title: 'Software Developer',
            description:
              'Software Developer for development of backend services wanted.'
          }
        ]
      }

      expect(getters.getJobs(state)).toEqual(state.jobs)
    })
  })
})
