/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import "typeface-m-plus-rounded-1c"

import Header from "./components/Header"
import Footer from "./components/Footer/Footer"
import * as classes from "./layout.module.scss"
import "./layout.scss"

const Layout: React.FC = ({ children }) => {
  return (
    <Auth0Provider
      domain="lapi.us.auth0.com"
      clientId="ub3YBp0z2VuVSxa9NY98SJff46FCM4CQ"
      redirectUri={window.location.origin + "/hotel/"}
    >
      <div className={classes.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Auth0Provider>
  )
}

export default Layout
