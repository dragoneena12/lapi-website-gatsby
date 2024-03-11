import React from "react"

import SEO from "../components/seo"
import Home from "../components/Home/Home"

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </>
)

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <Home />
  </>
)

export default IndexPage
