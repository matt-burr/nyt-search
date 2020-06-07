import React, { useState } from "react"
import { SearchForm, SearchResults } from "../../components/index"

import IArticle from "../../types/IArticle"

const HomePage = ({ ...props }) => {
  const [articles, setArticles] = useState<IArticle[]>([])
  const [query, setQuery] = useState<string>("")

  const areResultsDisplayed = articles.length > 0

  const getSearchFormArticles = (data: IArticle[], query: string) => {
    setArticles(data)
    setQuery(query)
  }

  return (
    <>
      <SearchForm setHomePageArticles={getSearchFormArticles}></SearchForm>
      {areResultsDisplayed ? (
        <SearchResults query={query} articles={articles}></SearchResults>
      ) : (
        <></>
      )}
    </>
  )
}

export default HomePage
