import React from "react"
import { IArticle } from "../../types/index"

interface SearchResultsProps {
  articles: IArticle[]
}

const SearchResults: React.FC<SearchResultsProps> = ({ articles }) => {
  return (
    <section>
      {articles.map((art, i) => {
        return <article></article>
      })}
    </section>
  )
}

export default SearchResults
