import React from "react"
import { useForm } from "react-hook-form"
import { createUseStyles } from "react-jss"

import { Input, Button } from "../index"
import { getArticles } from "../../services/ArticleSearchService"

interface SearchFormProps {
  setHomePageArticles: any
}

const createSearchFormStyles = createUseStyles({
  form: {
    width: "100%",
    color: "white",
  },
  button: {
    float: "right",
    padding: ".5rem 1rem",
    margin: "1rem 0",
  },
})

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { setHomePageArticles } = { ...props }

  const classes = createSearchFormStyles()

  const { register, handleSubmit } = useForm()

  const handleSearchRequest = async (data: any) => {
    getArticles(data.searchQuery)
      .then((res) => {
        setHomePageArticles(res, data.searchQuery)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <form className={classes.form}>
        <Input name="searchQuery" type="text" reference={register}>
          Article title
        </Input>
      </form>
      <Button
        customStyle={classes.button}
        onClick={handleSubmit(handleSearchRequest)}
        type="submit"
      >
        Search
      </Button>
    </>
  )
}

export default SearchForm
