import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="flex-grow flex flex-col p-8">
        <main className="flex-grow">{children}</main>
        <footer className="text-sm text-center text-gray-500">
          <p>© Computer Science Society {new Date().getFullYear()}</p>
          <p> Built with ❤️ by Justin Chadwell and Jonathan Rudman</p>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
