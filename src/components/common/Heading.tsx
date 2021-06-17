import React from "react"

import * as classes from "./Heading.module.scss"

const Heading: React.FC = ({ children }) => {
  return (
    <>
      <h1 className={classes.Heading}>{children}</h1>
    </>
  )
}

export default Heading
