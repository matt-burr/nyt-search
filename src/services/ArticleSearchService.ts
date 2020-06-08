import axios, { AxiosRequestConfig } from "axios"
import { IArticle, IApiResponse } from "../types/index"

const nytInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/",
})

export const getNytResponse = (query: string): Promise<IApiResponse> => {
  const apiKey = "q8cF56xxfgA9Nj0EJs7ufr5A4AGoTqu0"
  const url = `/articlesearch.json?q=${query}&api-key=${apiKey}`
  const config: AxiosRequestConfig = {}

  return nytInstance
    .get<IApiResponse>(url, config)
    .then((res) => {
      return res.data
    })
    .catch((err) => err)
}
