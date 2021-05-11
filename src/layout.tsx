/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "typeface-m-plus-rounded-1c"

import Header from "./components/Header"
import Footer from "./components/Footer/Footer"
import * as classes from "./layout.module.scss"
import "./layout.scss"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
