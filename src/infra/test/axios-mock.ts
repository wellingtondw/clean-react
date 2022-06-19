import axios from 'axios'
import { faker } from '@faker-js/faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue({
    data: {
      city: faker.address.city(),
      state: faker.address.state()
    },
    status: faker.internet.httpStatusCode()
  })

  return mockedAxios
}
