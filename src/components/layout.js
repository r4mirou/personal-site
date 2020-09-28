import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from "./header"
import { useSelector } from "react-redux"

const Layout = ({ children }) => {
  const theme = useSelector(state => state.theme.theme)

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
