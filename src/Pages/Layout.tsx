import React from "react"
import { createUseStyles } from "react-jss"

interface LayoutProps {
  children: any
}

const createLayoutStyles = createUseStyles({
  main: {
    width: "80%",
    margin: "0 auto",
    color: "white",
  },
  header: {
    textAlign: "center",
    color: "white",
  },
  img: {
    height: "72px",
  },
})

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  const classes = createLayoutStyles()

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
      <main className={classes.main}>{children}</main>
    </>
  )
}

export default Layout
