import React from "react"

import Heading from "../common/Heading"
import Tsukikusa from "./Tsukikusa"
import Fetherdra from "./Fetherdra"
import classes from "./Characters.module.scss"

const Characters: React.FC = () => (
  <div className={classes.Characters}>
    <Heading>Characters</Heading>
    <Tsukikusa />
    <Fetherdra />
  </div>
)

export default Characters
