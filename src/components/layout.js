/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Global/Footer"
import Navbar from "./Global/Navbar"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Navbar/>
    {/* <a href="#" className="btn btn-info btn-lg">
      <i className="glyphicon glyphicon-new-window"></i> To New Windows
    </a> */}
    {children}
    <Footer hero="V-Team" />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
