import React, { useState } from "react"
import { useForm } from "react-hook-form"

import { Input, Button } from "./index"
import { getArticles } from "../services/HttpService"

interface SearchFormProps {}

const SearchForm = ({ ...props }: SearchFormProps) => {
  const { register, handleSubmit } = useForm()

  const handleSearchRequest = async (data: any): Promise<void> => {
    getArticles(data.searchQuery)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(handleSearchRequest)}>
      <Input name="searchQuery" type="text" reference={register}>
        Article title
      </Input>
      <Button type="submit">Search</Button>
    </form>
  )
}

export default SearchForm
