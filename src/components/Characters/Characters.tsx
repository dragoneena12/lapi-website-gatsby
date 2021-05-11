import React from "react"

import Heading from "../common/Heading"
import Tsukikusa from "./Tsukikusa"
import Fetherdra from "./Fetherdra"
import { Container } from "./Characters.module.scss"

const Characters: React.FC = () => (
  <div className={Container}>
    <Heading>Characters</Heading>
    <Tsukikusa />
    <Fetherdra />
  </div>
)

export default Characters
