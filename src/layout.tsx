/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { TokenContext } from "./Context"
import Header from "./components/Header"
import Footer from "./components/Footer/Footer"
import * as classes from "./layout.module.scss"
import "./layout.scss"

const authClientId = process.env.GATSBY_AUTH_CLIENT_ID || ""

const Layout: React.FC = ({ children }) => {
  const [token, setToken] = useState("")

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <Auth0Provider domain="lapi.us.auth0.com" clientId={authClientId}>
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
