import React from "react"
import { createUseStyles } from "react-jss"
import { IArticle } from "../../types/index"

interface SearchResultsProps {
  articles: IArticle[]
}

const useSearchResultsStyles = createUseStyles({
  article: {
    background: "rgba(127, 127, 127)",
    opacity: ".5",
    display: "grid",
    padding: 1,
  },
  a: {
    color: "white",
    fontFamily: "OpenSans-Bold",
  },
})

const SearchResults: React.FC<SearchResultsProps> = ({ articles }) => {
  const classes = useSearchResultsStyles()
  console.log(articles)
  return (
    <section>
      {articles.map((art, i) => {
        return (
          <article key={i} className={classes.article}>
            <a className={classes.a} href={art.web_url}>
              <h4>{art.headline.main}</h4>
            </a>
            <span>{art.byline?.original}</span>
            <p>LEAD PARAGRAPH {art.lead_paragraph}</p>
            <p>ABSTRACT {art.abstract}</p>
            <div>SNIPPET{art.snippet}</div>
          </article>
        )
      })}
    </section>
  )
}

export default SearchResults
