interface IArticle {
  headline: Headline
  lead_paragraph: string
  snippet: string
  abstract: string
  byline?: Byline
  keywords?: Keywords
}

type Headline = {
  main: string
}

type Byline = {
  original: string
  person: []
  document_type: string
}

type Keywords = {
  name: string
  value: string
  rank: number
  major: string
}

export default IArticle
