import { Link } from "gatsby"
import React from "react"

import Heading from "../common/Heading"
import { Container, Text, LinkStyle } from "./Games.module.scss"

const Games: React.FC = () => (
  <div className={Container}>
    <Heading>Games</Heading>
    <p className={Text}>るりいろが作ったゲーム集</p>
    <Link to="/games/escape01" className={LinkStyle}>
      Escape01
    </Link>
  </div>
)

export default Games
