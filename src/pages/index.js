import React from "react"

import Layout from "../components/layout"
import Search from "../components/search"

const IndexPage = () => (
  <Layout>
    <div className="text-center transform translate-y-full py-2">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold my-6">CSS photo booth</h1>
      <Search />
    </div>
  </Layout>
)

export default IndexPage
