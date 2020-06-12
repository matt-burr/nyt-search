import React from "react"
import styled from "styled-components"
import { useForm, NestDataObject, FieldError } from "react-hook-form"

import { TextInput, Button, DateInput, Dropdown } from "../index"
import {
  getNytResponse,
  buildNytQuery,
} from "../../services/ArticleSearchService"
import INytQueryParams from "../../types/INytQueryParams"

interface SearchFormProps {
  setHomePageArticles?: any
  ref?: React.RefObject<HTMLFormElement>
  transform?: string
  errors?: NestDataObject<FormData, FieldError>
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

const Error = styled.div<SearchFormProps>`
  transition: max-height 1s ease;
  overflow: hidden;
  margin: 0px;
`

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { setHomePageArticles, transform } = { ...props }

  const { register, errors, handleSubmit } = useForm<FormData>()

  const handleSearchRequest = ({ q, begin_date, end_date, sort }: FormData) => {
    const params: INytQueryParams<{ [key: string]: string }> = {
      q,
      begin_date,
      end_date,
      sort,
    }

    buildNytQuery(params).then((query) => {
      getNytResponse(query)
        .then((res) => {
          const { docs, meta } = res.response
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
          aria-invalid={errors.q ? "true" : "false"}
          aria-describedby="queryError"
          reference={register({ required: true, minLength: 3 })}
        >
          Article title *
        </TextInput>
        <Error id="queryError" style={{ maxHeight: errors.q ? "32px" : "0" }}>
          {errors.q && "Input needs to be minimum 3 characters long!"}
        </Error>
        <Dropdown reference={register} label="Sort" name="sort">
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
