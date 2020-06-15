import React from "react"
import styled from "styled-components"

type ButtonProps = {
  children: string
  type?: "button" | "submit" | "reset" | undefined
  alignment?: string
  margin?: string
  onClick?: any
  disabled?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  margin: ${(props) => props.margin};
  font-family: OpenSans-Bold;
  font-size: ${(props) => props.theme.sizes.medium};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, onClick, alignment, disabled } = { ...props }

  const alignmentMap: { [key: string]: string } = {
    right: "1rem 0 0 1rem",
    left: "0 0 1rem 1rem",
    default: "1rem 1rem 1rem 1rem",
  }

  const margin = alignmentMap[alignment || "default"]

  return (
    <StyledButton
      margin={margin}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default Button
