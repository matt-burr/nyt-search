import React from "react"
import { createUseStyles } from "react-jss"

interface LayoutProps {
  children: any
}

const createLayoutStyles = createUseStyles({
  main: {
    width: "80%",
    margin: "0 auto",
  },
})

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  const classes = createLayoutStyles()

  return <main className={classes.main}>{children}</main>
}

export default Layout
