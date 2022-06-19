import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy<BodyType, ResponseType> implements HttpPostClient<BodyType, ResponseType> {
  url?: string
  body?: BodyType
  response: HttpResponse<ResponseType> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<BodyType>): Promise<HttpResponse<ResponseType>> {
    const { url, body } = params
    this.url = url
    this.body = body
    return Promise.resolve(this.response)
  }
}
