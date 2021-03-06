import React from "react"
import styled from "styled-components"

import { IArticle, Meta } from "../../types/index"

interface SearchResultsProps {
  articles: IArticle[]
  meta: Meta | undefined
}

const Title = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.sizes.xLarge};
  @media ${(props) => props.theme.mq.mobile} {
    font-size: ${(props) => props.theme.sizes.large};
  }
`

const StyledArticle = styled.article`
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.sizes.medium} 0;
  box-sizing: border-box;
`

const StyledLink = styled.a`
  font-family: OpenSans-Bold;
  font-size: ${(props) => props.theme.sizes.large};
  color: ${(props) => props.theme.colors.text};
  @media ${(props) => props.theme.mq.mobile} {
    font-size: ${(props) => props.theme.sizes.medium};
  }
`

const SearchResults: React.FC<SearchResultsProps> = ({ articles, meta }) => {
  return (
    <>
      <hr />
      <Title>Search results</Title>
      <span>
        Displaying {articles.length} of {meta?.hits} results
      </span>
      <section>
        {articles.map((art, i) => {
          return (
            <StyledArticle key={i}>
              <StyledLink href={art.web_url}>
                <span>{art.headline.main}</span>
              </StyledLink>
              <br />
              <span>
                {art.pub_date && new Date(art.pub_date).toLocaleDateString()}
              </span>{" "}
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
