import React from "react"

type ButtonProps = {
  children: string
  type?: "button" | "submit" | "reset" | undefined
  onClick: any
  customStyle: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, onClick, customStyle } = { ...props }
  return (
    <button className={customStyle} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
