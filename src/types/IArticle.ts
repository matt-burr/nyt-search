interface IArticle {
  headline: Headline
  lead_paragraph: string
  snippet: string
  abstract: string
  byline?: Byline
  keywords?: Keyword
  web_url?: string
  pub_date?: string
}

type Headline = {
  main: string
}

type Byline = {
  original: string
  person: []
  document_type: string
}

type Keyword = {
  name: string
  value: string
  rank: number
  major: string
}

export default IArticle
