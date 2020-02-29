import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6">
      <span className="font-semibold text-xl text-white"><Link to="/">{siteTitle}</Link></span>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
