import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

import { Input, Button } from "../index"
import { getNytResponse } from "../../services/ArticleSearchService"
import Dropdown from "../UI/Dropdown"

interface SearchFormProps {
  setHomePageArticles: any
}

const StyledForm = styled.form`
  form: {
    width: "100%";
    color: "white";
    font-size: ${(props) => props.theme.sizes.xLarge}
`

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { setHomePageArticles } = { ...props }

  const { register, handleSubmit } = useForm()

  const handleSearchRequest = (data: any) => {
    getNytResponse(data.searchQuery)
      .then((res) => {
        const { docs, meta } = res.response
        console.log(docs)
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
        <Dropdown>
          {["Article", "Children yeyeye", "Determinism > Free will"]}
        </Dropdown>
        <Button
          alignment="right"
          onClick={handleSubmit(handleSearchRequest)}
          type="submit"
        >
          Search
        </Button>
      </StyledForm>
    </div>
  )
}

export default SearchForm
