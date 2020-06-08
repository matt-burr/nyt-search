import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

import { Input, Button } from "../index"
import { getNytResponse } from "../../services/ArticleSearchService"

interface SearchFormProps {
  setHomePageArticles: any
}

const StyledForm = styled.form`
  form: {
    width: "100%";
    color: "white";
`

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { setHomePageArticles } = { ...props }

  const { register, handleSubmit } = useForm()

  const handleSearchRequest = async (data: any) => {
    getNytResponse(data.searchQuery)
      .then((res) => {
        const { docs, meta } = res.response
        setHomePageArticles(docs, meta)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <StyledForm>
        <Input
          autocomplete="off"
          name="searchQuery"
          type="text"
          reference={register}
        >
          Article title
        </Input>
      </StyledForm>
      <Button onClick={handleSubmit(handleSearchRequest)} type="submit">
        Search
      </Button>
    </div>
  )
}

export default SearchForm
