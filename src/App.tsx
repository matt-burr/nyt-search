import React from "react"
import { Layout, HomePage } from "./pages/index"

const App: React.FC<any> = () => {
  return (
    <Layout type="center">
      <HomePage />
    </Layout>
  )
}

export default App
