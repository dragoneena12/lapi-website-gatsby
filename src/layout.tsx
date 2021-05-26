/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import "typeface-m-plus-rounded-1c"

import { TokenContext } from "./Context"
import Header from "./components/Header"
import Footer from "./components/Footer/Footer"
import * as classes from "./layout.module.scss"
import "./layout.scss"

const origin = process.env.GATSBY_ORIGIN

const Layout: React.FC = ({ children }) => {
  const [token, setToken] = useState("")

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <Auth0Provider
        domain="lapi.us.auth0.com"
        clientId="ub3YBp0z2VuVSxa9NY98SJff46FCM4CQ"
        redirectUri={origin + "/hotel/"}
      >
        <div className={classes.layout}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </Auth0Provider>
    </TokenContext.Provider>
  )
}

export default Layout
