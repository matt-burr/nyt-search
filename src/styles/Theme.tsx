import { DefaultTheme } from "styled-components"

const Theme: DefaultTheme = {
  colors: {
    text: "white",
    background: "black",
    accent: "red",
  },
  sizes: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    xLarge: "2rem",
  },
  mq: {
    mobile: "(max-width: 475px)",
  },
}

export default Theme
