import React from "react"

interface ButtonProps {
  children: string
  type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, ...props }: ButtonProps) => {
  const { type } = { ...props }
  return <button type={type}>{children}</button>
}

export default Button
