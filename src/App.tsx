import React from "react"
import { Layout, HomePage } from "./pages/index"
import {
  ThemeProvider,
  GlobalStyleComponent,
  DefaultTheme,
} from "styled-components"
import { GlobalStyles, Theme } from "./styles/index"

type AppProps = {
  GlobalStyles: GlobalStyleComponent<{}, DefaultTheme>
  Theme: DefaultTheme
}

const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  )
}

export default App
