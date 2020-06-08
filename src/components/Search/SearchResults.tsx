import React from "react"
import styled from "styled-components"

import { IArticle, Meta } from "../../types/index"

interface SearchResultsProps {
  articles: IArticle[]
  meta: Meta | undefined
}

const StyledArticle = styled.article`
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.sizes.medium};
`

const StyledLink = styled.a`
  font-family: OpenSans-Bold;
  font-size: ${(props) => props.theme.sizes.large};
`

const SearchResults: React.FC<SearchResultsProps> = ({ articles, meta }) => {
  return (
    <>
      <h1>Search results</h1>
      <section>
        {articles.map((art, i) => {
          return (
            <StyledArticle key={i}>
              <StyledLink href={art.web_url}>
                <span>{art.headline.main}</span>
              </StyledLink>
              <span>{art.byline?.original}</span>
              {/* <p>LEAD PARAGRAPH {art.lead_paragraph}</p>
            <p>ABSTRACT {art.abstract}</p>
            <div>SNIPPET{art.snippet}</div> */}
            </StyledArticle>
          )
        })}
      </section>
    </>
  )
}

export default SearchResults
