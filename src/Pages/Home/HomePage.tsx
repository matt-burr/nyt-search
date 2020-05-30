import React from "react"
import SearchForm from "../../components/SearchForm"

const HomePage = ({ ...props }) => {
  return (
    <>
      <img
        height="72px"
        src="/images/The_New_York_Times_logo1.png"
        alt="New York Times logo"
      ></img>
      <h1>Search</h1>
      <SearchForm />
    </>
  )
}

export default HomePage
