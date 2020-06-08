import React, { useState } from "react"
import { SearchForm, SearchResults } from "../../components/index"

import { IArticle, Meta } from "../../types"

const HomePage = ({ ...props }) => {
  const [articles, setArticles] = useState<IArticle[]>([])
  const [meta, setMeta] = useState<Meta>()

  const areResultsDisplayed = articles.length > 0

  const getSearchFormArticles = (data: IArticle[], meta: Meta) => {
    setArticles(data)
    setMeta(meta)
  }

  return (
    <>
      <SearchForm setHomePageArticles={getSearchFormArticles}></SearchForm>
      {areResultsDisplayed ? (
        <SearchResults meta={meta} articles={articles}></SearchResults>
      ) : (
        <></>
      )}
    </>
  )
}

export default HomePage
