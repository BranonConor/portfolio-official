import "./layout.css"

import Footer from "./footer/footer"
import PropTypes from "prop-types"
import React from "react"
import Sidebar from "./sidebar/sidebar"

const Layout = ({ children }) => {

  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
