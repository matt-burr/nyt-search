import React, { InputHTMLAttributes, useEffect } from "react"
import styled from "styled-components"

const StyledLabel = styled.label<LabelProps>`
  width: 100%;
  position: relative;
  left: 16px;
  top: ${(props) => (props.isActive ? ".5em" : "1em")};
  font-size: ${(props) =>
    props.isActive ? props.theme.sizes.medium : props.theme.sizes.xLarge};
  line-height: ${(props) => props.theme.sizes.xLarge};
  transition: all 0.2s ease-in-out;
  z-index: 10;
`

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0 .5em;
  background: transparent;
  font-size: ${(props) => props.theme.sizes.xLarge};
  border: none;
  border-bottom: .1em solid white;
  color: white;
  font-family: inherit;
}`

const StyledInputGroup = styled.div``

interface InputProps {
  readonly children: any
  type?: string
  name: string
  reference: any
  autocomplete: string
}

type LabelProps = {
  isActive?: boolean
}

const Input: React.FC<InputProps> = (props) => {
  const [fieldActive, setFieldActive] = React.useState(false)
  const { children, type, name, reference, autocomplete } = { ...props }

  const handleFocus = () => {
    setFieldActive(true)
  }

  const handleBlur = (e: any) => {
    if (!e.target.value) {
      setFieldActive(false)
    }
  }

  return (
    <StyledInputGroup>
      <StyledLabel isActive={fieldActive} htmlFor={name}>
        {children}
      </StyledLabel>
      <StyledInput
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete={autocomplete}
        name={name}
        id={name}
        type={type}
        ref={reference}
      ></StyledInput>
    </StyledInputGroup>
  )
}
export default Input
