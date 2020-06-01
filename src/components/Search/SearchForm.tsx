import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Input, Button } from "../index"
import { IArticle } from "../../types/index"
import { getArticles } from "../../services/ArticleSearchService"
import SearchResults from "./SearchResults"

interface SearchFormProps {}

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { register, handleSubmit } = useForm()
  const [articles, setArticles] = useState<IArticle[]>([
    { headline: { main: "" }, abstract: "", lead_paragraph: "", snippet: "" },
  ])

  const handleSearchRequest = async (data: any) => {
    getArticles(data.searchQuery)
      .then((res) => {
        setArticles(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleSearchRequest)}>
          <Input name="searchQuery" type="text" reference={register}>
            Article title
          </Input>
          <Button type="submit">Search</Button>
        </form>
      </div>
      {articles ? <SearchResults articles={articles} /> : ""}
    </>
  )
}

export default SearchForm
