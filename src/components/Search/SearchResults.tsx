import React, { useEffect } from "react"
import { createUseStyles } from "react-jss"
import { IArticle } from "../../types/index"

interface SearchResultsProps {
  articles: IArticle[]
  query: string
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

const SearchResults: React.FC<SearchResultsProps> = ({ articles, query }) => {
  const classes = useSearchResultsStyles()
  useEffect(() => {})
  return (
    <>
      <section>
        <span>
          Your '{query}' query returned {articles.length} result
          {articles.length % 10 === 1 ? "" : "s"}
        </span>
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
