import IArticle from "./IArticle"

export interface IApiResponse {
  status: boolean
  copyright: string
  response: {
    docs: IArticle[]
    meta: Meta
  }
}

export interface Meta {
  hits: number
  offset: number
  time: number
}
