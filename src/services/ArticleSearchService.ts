import axios, { AxiosRequestConfig } from "axios"
import { IApiResponse } from "../types/index"

const nytInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/",
})

export const buildNytQuery = async (params: any): Promise<string> => {
  const query = Object.keys(params)
    .map((key: string) => {
      return (
        params[key] &&
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
    })
    .join("&")

  return query
}

const apiKey = "q8cF56xxfgA9Nj0EJs7ufr5A4AGoTqu0"
export const getNytResponse = (query: string): Promise<IApiResponse> => {
  const url = `/articlesearch.json?q=${query}&api-key=${apiKey}`
  const config: AxiosRequestConfig = {}

  return nytInstance
    .get<IApiResponse>(url, config)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw new Error(err)
    })
}
