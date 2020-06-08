import React, { useEffect } from "react"
import { createUseStyles } from "react-jss"
import { IArticle, Meta } from "../../types/index"

interface SearchResultsProps {
  articles: IArticle[]
  meta: Meta | undefined
}

const useSearchResultsStyles = createUseStyles({
  article: {
    display: "grid",
    padding: "8px",
  },
  a: {
    color: "white",
    fontFamily: "OpenSans-Bold",
  },
})

const SearchResults: React.FC<SearchResultsProps> = ({ articles, meta }) => {
  const classes = useSearchResultsStyles()
  useEffect(() => {})
  return (
    <>
      <h1>Search results</h1>
      <section>
        {articles.map((art, i) => {
          return (
            <article key={i} className={classes.article}>
              <a className={classes.a} href={art.web_url}>
                <span>{art.headline.main}</span>
              </a>
              <span>{art.byline?.original}</span>
              {/* <p>LEAD PARAGRAPH {art.lead_paragraph}</p>
            <p>ABSTRACT {art.abstract}</p>
            <div>SNIPPET{art.snippet}</div> */}
            </article>
          )
        })}
      </section>
    </>
  )
}

export default SearchResults
