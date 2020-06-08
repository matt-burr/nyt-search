import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string
      background: string
      accent: string
    }
    sizes: {
      small: string
      medium: string
      large: string
      xLarge: string
    }
  }
}
