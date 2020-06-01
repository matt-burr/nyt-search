import React from "react"

type InputProps = {
  children: any
  type?: string
  name: string
  reference: any
}

const Input: React.FC<InputProps> = (props) => {
  const { children, type, name, reference } = { ...props }

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input name={name} id={name} type={type} ref={reference}></input>
    </>
  )
}

export default Input
