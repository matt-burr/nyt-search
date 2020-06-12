import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"

import { TextInput, Button, DateInput, Dropdown } from "../index"
import {
  getNytResponse,
  buildNytQuery,
} from "../../services/ArticleSearchService"

interface SearchFormProps {
  setHomePageArticles?: any
  ref?: React.RefObject<HTMLFormElement>
  transform: string
}

type FormData = {
  q: string
  begin_date: string
  end_date: string
  sort: string
}

const StyledForm = styled.form<SearchFormProps>`
  transition: all 1s ease;
  transform: ${(props) => props.transform};
  & > * {
    margin: ${(props) => props.theme.sizes.small} 0;
  }
`

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { setHomePageArticles, transform } = { ...props }

  const { register, handleSubmit } = useForm<FormData>()

  const handleSearchRequest = ({ q, begin_date, end_date, sort }: FormData) => {
    const params: { [key: string]: string } = {
      q,
      begin_date,
      end_date,
      sort,
    }
    console.log(sort)

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
      <StyledForm
        transform={transform}
        onSubmit={handleSubmit(handleSearchRequest)}
      >
        <TextInput
          autocomplete="off"
          name="q"
          type="text"
          reference={register({ required: true, minLength: 3 })}
        >
          Article title *
        </TextInput>
        <Dropdown reference={register} label="Sort" name="name">
          {["Newest", "Oldest"]}
        </Dropdown>
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
        <Button alignment="right" type="submit">
          Search
        </Button>
      </StyledForm>
    </div>
  )
}

export default SearchForm
