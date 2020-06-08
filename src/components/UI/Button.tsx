import React from "react"
import styled from "styled-components"

type ButtonProps = {
  children: string
  type?: "button" | "submit" | "reset" | undefined
  onClick: any
}

const StyledButton = styled.button`
  float: right;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
`

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, onClick } = { ...props }
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  )
}

export default Button
