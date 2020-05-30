import React from "react"

interface LayoutProps {
  children: any
}

const Layout = ({ children, ...rest }: LayoutProps) => {
  return <main>{children}</main>
}

export default Layout
