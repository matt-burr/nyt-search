import React from "react"

interface ButtonProps {
  children: string
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <button>{children}</button>
}

export default Button
