import axios, { AxiosResponse } from "axios"

const nytInstance = axios.create({
  baseURL: "https://api.nytimes.com/svc/search/v2/",
})

export const getArticles = (query: string): Promise<AxiosResponse> => {
  return nytInstance.get(
    `/articlesearch.json?q=${query}&api-key=q8cF56xxfgA9Nj0EJs7ufr5A4AGoTqu0`
  )
}

// get(`/articlesearch.json?q=${query}`)
