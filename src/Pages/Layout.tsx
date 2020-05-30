import React from "react"
import { createUseStyles } from "react-jss"

interface LayoutProps {
  children: any
  type: string
}

const createLayoutStyles = createUseStyles({
  main: {
    textAlign: (type: string) => type,
    color: "white",
    padding: "32px",
  },
})

const Layout = ({ children, ...props }: LayoutProps) => {
  const { type } = { ...props }
  console.log(type)

  const classes = createLayoutStyles(type)

  return <main className={classes.main}>{children}</main>
}

export default Layout
