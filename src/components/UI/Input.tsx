import React from "react"
import { createUseStyles } from "react-jss"

const useInputStyles = createUseStyles({
  inputGroup: {},
  label: {
    width: "100%",
    position: "relative",
    top: "1.75rem",
    left: "0.75rem",
    fontSize: "32px",
    lineHeight: "32px",
    transition: "all .2s ease-in-out",
    zIndex: 10,
  },
  labelActive: {
    top: "0",
    fontSize: "16px",
    left: ".75rem",
  },
  input: {
    boxSizing: "border-box",
    width: "100%",
    background: "transparent",
    fontSize: "32px",
    border: "none",
    borderBottom: ".1rem solid white",
    color: "white",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      fontStyle: "italic",
      color: "white",
    },
  },
})

type InputProps = {
  children: any
  type?: string
  name: string
  reference: any
}

const Input: React.FC<InputProps> = (props) => {
  const [fieldActive, setFieldActive] = React.useState(false)
  const { children, type, name, reference } = { ...props }
  const classes = useInputStyles()

  const handleFocus = () => {
    setFieldActive(true)
  }

  const handleBlur = (e: any) => {
    if (!e.target.value) {
      setFieldActive(false)
    }
  }

  return (
    <div className={classes.inputGroup}>
      <label
        className={`${classes.label} ${fieldActive ? classes.labelActive : ""}`}
        htmlFor={name}
      >
        {children}
      </label>
      <input
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={classes.input}
        name={name}
        id={name}
        type={type}
        ref={reference}
      ></input>
    </div>
  )
}

export default Input
