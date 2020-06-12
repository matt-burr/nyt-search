import React from "react"
import styled from "styled-components"

interface DropdownProps {
  multiselect?: boolean
  children: Array<string>
  reference: any
  label: string
  name: string
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Label = styled.label`
  font-size: ${(props) => props.theme.sizes.large};
`
const StyledDropdown = styled.select`
  width: auto;
  background: transparent;
  font-size: ${(props) => props.theme.sizes.medium};
  padding: 0.25em 0.5em;
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-bottom: 0.1em solid white;
  font-family: inherit;
  outline: none;
`

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { children, label, reference, name } = props
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledDropdown name={name} ref={reference}>
        {children.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          )
        })}
      </StyledDropdown>
    </Wrapper>
  )
}

export default Dropdown
