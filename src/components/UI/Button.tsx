import React from "react"

type ButtonProps = {
  children: string
  type?: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type } = { ...props }
  return <button type={type}>{children}</button>
}

export default Button
