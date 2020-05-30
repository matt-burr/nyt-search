import React from "react"

interface InputProps {
  children: any
}

const Input = ({ children, ...rest }: InputProps) => {
  return (
    <>
      <label>{children}</label>
      <input></input>
    </>
  )
}

export default Input
