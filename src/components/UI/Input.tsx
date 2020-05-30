import React from "react"

interface InputProps {
  children: any
  type?: string
  name: string
  reference: any
}

const Input = ({ children, ...props }: InputProps) => {
  const { type, name, reference } = { ...props }

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input name={name} id={name} type={type} ref={reference}></input>
    </>
  )
}

export default Input
