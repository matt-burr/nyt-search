import React from "react"
import styled from "styled-components"

type DropdownProps = {
  multiselect?: boolean
  children: Array<string>
}

const StyledDropdown = styled.select`
  width: auto;
  background: transparent;
  font-size: ${(props) => props.theme.sizes.large};
  padding: 0.25em 0.5em;
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-bottom: 0.1em solid white;
  font-family: inherit;
  outline: none;
`

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { children } = props
  console.log(children)
  return (
    <StyledDropdown>
      <option value="">Select content type</option>
      {children.map((option, i) => {
        return (
          <option key={i} value={option}>
            {option}
          </option>
        )
      })}
    </StyledDropdown>
  )
}

export default Dropdown
