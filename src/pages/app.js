import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"

import Gallery from "../components/gallery"
import NotFound from "../components/404"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Gallery path="/strip/:strip" imagePath="/photos/" />
        <NotFound default />
      </Router>
    </Layout>
  )
}

export default App
