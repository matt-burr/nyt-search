import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

import { TextInput, Button, DateInput, Dropdown } from "../index"
import {
  getNytResponse,
  buildNytQuery,
} from "../../services/ArticleSearchService"
import { INytQueryParams } from "../../types"

interface SearchFormProps {
  setHomePageArticles: any
}

const StyledForm = styled.form`
  width: "100%";
  color: "white";
  & > * {
    margin: ${(props) => props.theme.sizes.small} 0;
  }
`

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { setHomePageArticles } = { ...props }

  const { register, handleSubmit } = useForm()

  const handleSearchRequest = (data: any) => {
    const alignmentMap: { [key: string]: string } = {
      right: "1rem 0 0 1rem",
      left: "0 0 1rem 1rem",
      default: "1rem 1rem 1rem 1rem",
    }

    const params: { [key: string]: string } = {
      q: data.q,
      begin_date: data.begin_date,
      end_date: data.end_date,
    }

    buildNytQuery(params).then((query) => {
      console.log(query)
      getNytResponse(query)
        .then((res) => {
          const { docs, meta } = res.response
          console.log(docs)
          setHomePageArticles(docs, meta)
        })
        .catch((err) => console.log(err))
    })
  }

  return (
    <div>
      <StyledForm>
        <TextInput autocomplete="off" name="q" type="text" reference={register}>
          Article title
        </TextInput>
        {/* <Dropdown reference={register}>
          {["Article", "Children yeyeye", "Determinism > Free will"]}
        </Dropdown> */}
        <DateInput
          type="date"
          label="Start date: "
          name="begin_date"
          reference={register}
        ></DateInput>
        <DateInput
          type="date"
          label="End date: "
          name="end_date"
          reference={register}
        ></DateInput>
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
