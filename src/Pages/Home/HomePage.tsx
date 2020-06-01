import React from "react"
import { createUseStyles } from "react-jss"
import { SearchForm } from "../../components/index"

const useHomePageStyles = createUseStyles({
  header: {
    textAlign: "center",
    color: "white",
  },
  img: {
    height: "72px",
  },
})

const HomePage = ({ ...props }) => {
  const classes = useHomePageStyles()
  return (
    <>
      <header className={classes.header}>
        <img
          className={classes.img}
          src="/images/The_New_York_Times_logo1.png"
          alt="New York Times logo"
        ></img>
        <h1>Search</h1>
      </header>
      <SearchForm></SearchForm>
    </>
  )
}

export default HomePage
