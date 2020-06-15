import React from "react"
import styled from "styled-components"

type DatepickerProps = {
  reference: any
  name: string
  label: string
  type: string
  onChange?: any
}

const StyledDatepicker = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.sizes.large};
`

const StyledInput = styled.input`
  background: transparent;
  color: white;
  border: none;
  border-bottom: 0.1em solid white;
  font-size: ${(props) => props.theme.sizes.medium};
  font-family: OpenSans-Light;
  outline: none;
  min-width: 160px;
  &::-webkit-inner-spin-button {
    display: none;
  }
  &::-webkit-calendar-picker-indicator {
    background: url(./images/Feather-core-calendar.svg) center/80% no-repeat;
  }
`

const Datepicker: React.FC<DatepickerProps> = (props) => {
  const { reference, name, type, label, onChange } = props
  return (
    <StyledDatepicker>
      <label>{label}</label>
      <StyledInput
        onChange={onChange}
        name={name}
        type={type}
        ref={reference}
      />
    </StyledDatepicker>
  )
}

export default Datepicker
