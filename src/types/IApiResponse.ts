import IArticle from "./IArticle"

interface IApiResponse {
  status: boolean
  copyright: string
  response: {
    docs: IArticle[]
    meta: Meta
  }
}

type Meta = {
  hits: number
  offset: number
  time: number
}

export default IApiResponse
