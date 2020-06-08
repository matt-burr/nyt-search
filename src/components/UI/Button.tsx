import React from "react"
import styled from "styled-components"

type ButtonProps = {
  children: string
  type?: "button" | "submit" | "reset" | undefined
  onClick: any
}

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  font-family: OpenSans-Bold;
  font-size: ${(props) => props.theme.sizes.medium};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
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
