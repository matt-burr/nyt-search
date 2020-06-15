import React, { ChangeEvent } from "react"
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

  const { register, errors, handleSubmit, setError, clearError } = useForm<
    FormData
  >()

  const validateBeginDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const today = new Date().getTime()
    const start = new Date(e.target.value).getTime()

    start > today
      ? setError(
          "begin_date",
          "string",
          "Start date cannot occur in the future"
        )
      : clearError("begin_date")
  }

  const validateEndDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const today = new Date().getTime()
    const end = new Date(e.target.value).getTime()

    end < today
      ? setError("end_date", "string", "End date cannot occur in the past")
      : clearError("end_date")
  }

  const validateDates = async (
    start_date: string,
    end_date: string
  ): Promise<boolean> => {
    const start = new Date(start_date).getTime()
    const end = new Date(end_date).getTime()

    return end ? end - start > 0 : true
  }

  const handleSearchRequest = ({ q, begin_date, end_date, sort }: FormData) => {
    const params: INytQueryParams<{ [key: string]: string }> = {
      q,
      begin_date,
      end_date,
      sort,
    }

    validateDates(begin_date, end_date).then((res) => {
      res
        ? buildNytQuery(params).then((query) => {
            getNytResponse(query)
              .then((res) => {
                clearError("end_date")
                const { docs, meta } = res.response
                setHomePageArticles(docs, meta)
              })
              .catch((err) => console.log(err))
          })
        : setError(
            "end_date",
            "string",
            "Start date cannot be greater than end date"
          )
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
        <Error style={{ maxHeight: errors.q ? "32px" : "0" }}>
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
          onChange={validateBeginDate}
        ></DateInput>
        <Error style={{ maxHeight: errors.begin_date ? "32px" : "0" }}>
          {errors.begin_date && errors.begin_date.message}
        </Error>
        <DateInput
          type="date"
          label="End date: "
          name="end_date"
          reference={register()}
          onChange={validateEndDate}
        ></DateInput>
        <Error style={{ maxHeight: errors.end_date ? "32px" : "0" }}>
          {errors.end_date && errors.end_date.message}
        </Error>
        <Button alignment="right" type="submit">
          Search
        </Button>
      </StyledForm>
    </div>
  )
}

export default SearchForm
