import { DefaultTheme } from "styled-components"

const Theme: DefaultTheme = {
  colors: {
    text: "white",
    textDark: "#323330",
    background: "black",
    accent: "red",
  },
  sizes: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    xLarge: "2rem",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
  mq: {
    mobile: "(max-width: 475px)",
  },
}

export default Theme
