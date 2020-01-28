import Moment from 'moment'
import mutations from '@/store/jobs/mutations'

describe('VUEX mutations of the jobs module', () => {
  describe('mutation for adding jobs to the store', () => {
    it('should add jobs to the store', () => {
      const state = {
        jobs: [
          {
            id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
            type: 'Full Time',
            company: 'Umbrella Corporation',
            location: 'Raccoon City',
            title: 'Senior Software Developer',
            description: '',
            creationDate: Moment(Date.parse('Mon Jan 20 13:47:11 UTC 2020'))
          }
        ]
      }

      const payload = [
        {
          id: '433bfb2c-ec2a-40f9-b2ef-a7b65ee740da',
          type: 'Full Time',
          company: 'Weyland-Yutani',
          location: 'New York',
          title: 'Senior Full Stack Software Engineer',
          description: '',
          creationDate: Moment(Date.parse('Mon Jan 20 15:00:12 UTC 2020'))
        }
      ]

      mutations.ADD_JOBS(state, payload)
      expect(state.jobs).toEqual([
        {
          id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
          type: 'Full Time',
          company: 'Umbrella Corporation',
          location: 'Raccoon City',
          title: 'Senior Software Developer',
          description: '',
          creationDate: Moment(Date.parse('Mon Jan 20 13:47:11 UTC 2020'))
        },
        {
          id: '433bfb2c-ec2a-40f9-b2ef-a7b65ee740da',
          type: 'Full Time',
          company: 'Weyland-Yutani',
          location: 'New York',
          title: 'Senior Full Stack Software Engineer',
          description: '',
          creationDate: Moment(Date.parse('Mon Jan 20 15:00:12 UTC 2020'))
        }
      ])
    })
  })

  describe('mutation for saving the description of a job into store', () => {
    let state

    beforeEach(() => {
      state = {
        jobs: [
          {
            id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
            type: 'Full Time',
            company: 'Umbrella Corporation',
            location: 'Raccoon City',
            title: 'Senior Software Developer',
            description: '',
            creationDate: Moment(Date.parse('Mon Jan 20 13:47:11 UTC 2020'))
          },
          {
            id: '433bfb2c-ec2a-40f9-b2ef-a7b65ee740da',
            type: 'Full Time',
            company: 'Weyland-Yutani',
            location: 'New York',
            title: 'Senior Full Stack Software Engineer',
            description: '',
            creationDate: Moment(Date.parse('Mon Jan 20 15:00:12 UTC 2020'))
          }
        ]
      }
    })

    it('should set the description of job to the store correctly', () => {
      const payload = {
        id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
        type: 'Full Time',
        company: 'Umbrella Corporation',
        location: 'Raccoon City',
        title: 'Senior Software Developer',
        description:
          'Senior Software Developer for the development of defense systems wanted.',
        creationDate: Moment(Date.parse('Mon Jan 20 13:47:11 UTC 2020'))
      }

      mutations.SET_DESCRIPTION(state, payload)
      expect(state.jobs).toEqual([
        {
          id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
          type: 'Full Time',
          company: 'Umbrella Corporation',
          location: 'Raccoon City',
          title: 'Senior Software Developer',
          description:
            'Senior Software Developer for the development of defense systems wanted.',
          creationDate: Moment(Date.parse('Mon Jan 20 13:47:11 UTC 2020'))
        },
        {
          id: '433bfb2c-ec2a-40f9-b2ef-a7b65ee740da',
          type: 'Full Time',
          company: 'Weyland-Yutani',
          location: 'New York',
          title: 'Senior Full Stack Software Engineer',
          description: '',
          creationDate: Moment(Date.parse('Mon Jan 20 15:00:12 UTC 2020'))
        }
      ])
    })

    it('should not run into error when trying to set description of not existing job', () => {
      const payload = {
        id: '01ce26dc-6909-4af9-246e-a7e7ce9970af',
        type: 'Full Time',
        company: 'Triton Dynamics',
        location: 'San Francisco',
        title: 'Software Developer',
        description:
          'Software Developer for development of backend services wanted.',
        creationDate: Moment(Date.parse('Fri Jan 24 08:54:17 UTC 2020'))
      }

      mutations.SET_DESCRIPTION(state, payload)
      expect(state.jobs).toEqual([
        {
          id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
          type: 'Full Time',
          company: 'Umbrella Corporation',
          location: 'Raccoon City',
          title: 'Senior Software Developer',
          description: '',
          creationDate: Moment(Date.parse('Mon Jan 20 13:47:11 UTC 2020'))
        },
        {
          id: '433bfb2c-ec2a-40f9-b2ef-a7b65ee740da',
          type: 'Full Time',
          company: 'Weyland-Yutani',
          location: 'New York',
          title: 'Senior Full Stack Software Engineer',
          description: '',
          creationDate: Moment(Date.parse('Mon Jan 20 15:00:12 UTC 2020'))
        }
      ])
    })
  })

  describe('mutation for resetting the store to initial state', () => {
    it('should set the state object to initial values', () => {
      const state = {
        jobs: [
          {
            id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
            type: 'Full Time',
            company: 'Umbrella Corporation',
            location: 'Raccoon City',
            title: 'Senior Software Developer',
            description: '',
            creationDate: Moment(Date.parse('Mon Jan 20 13:47:11 UTC 2020'))
          }
        ]
      }

      mutations.CLEAR(state)
      expect(state).toEqual({ jobs: [] })
    })
  })
})
