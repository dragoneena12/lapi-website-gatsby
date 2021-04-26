import React from "react"

import Fuwa from "../utils/Fuwa"
import classes from "./Heading.module.scss"

const Heading: React.FC = ({ children }) => {
  return (
    <>
      <Fuwa>
        <h1 className={classes.Heading}>{children}</h1>
      </Fuwa>
    </>
  )
}

export default Heading
