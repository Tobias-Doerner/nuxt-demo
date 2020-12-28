import actions from '@/store/jobs/actions'

describe('VUEX actions of the jobs module', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  afterEach(() => {
    commit = null
  })

  describe.skip('action for retrieving jobs from the REST API', () => {
    it('should retrieve jobs successfully from backend', async () => {
      actions.$axios = {
        get: () => {
          return Promise.resolve({
            status: 200,
            data: [
              {
                id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
                type: 'Full Time',
                company: 'Umbrella Corporation',
                location: 'Racoon City',
                title: 'Senior Software Developer',
                description:
                  'Software Developer for development of backend services wanted. Our business is life itself.',
                url: 'https://www.umbrella-corporation.com',
                created_at: 'Tue Dec 17 13:40:57 UTC 2019',
                how_to_apply:
                  'https://www.umbrella-corporation.com/career/45re-432',
                company_logo: 'https://www.umbrella-corporation.com/logo.png'
              },
              {
                id: '433bfb2c-ec2a-40f9-b2ef-a7b65ee740da',
                type: 'Full Time',
                company: 'Weyland-Yutani',
                location: 'New York',
                title: 'Senior Full Stack Software Engineer',
                description: 'Senior Full Stack Software Engineer wanted.',
                url: 'https://www.weyland-yutani.com',
                created_at: 'Mon Dec 16 12:11:55 UTC 2019',
                how_to_apply: 'https://www.weyland-yutani.com/career/1254547',
                company_logo: 'https://www.weyland-yutani.com/logo.png'
              }
            ]
          })
        }
      }

      await actions.GET_JOBS({ commit })

      expect(commit).toHaveBeenCalledWith('ADD_JOBS', [
        {
          id: 'c38a8bc4-ad2f-3f98-ef2a-c3a4e956a5a7',
          type: 'Full Time',
          company: 'Umbrella Corporation',
          location: 'Racoon City',
          title: 'Senior Software Developer',
          description: '',
          creationDate: 'Tue Dec 17 13:40:57 UTC 2019'
        },
        {
          id: '433bfb2c-ec2a-40f9-b2ef-a7b65ee740da',
          type: 'Full Time',
          company: 'Weyland-Yutani',
          location: 'New York',
          title: 'Senior Full Stack Software Engineer',
          description: '',
          creationDate: 'Mon Dec 16 12:11:55 UTC 2019'
        }
      ])
    })

    it('should handle network error when retrieving jobs from backend', async () => {
      actions.$axios = {
        get: () => Promise.reject(new Error('Network Error'))
      }

      await actions.GET_JOBS({ commit })

      expect(commit).toHaveBeenCalledTimes(0)
    })
  })
})
