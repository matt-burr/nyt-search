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
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {loading ? (
          "Loading"
        ) : (
          <Layout>
            <HomePage />
          </Layout>
        )}
      </ThemeProvider>
    </>
  )
}

export default App
