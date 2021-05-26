import React from "react"

import Login from "./Login"
import { Container } from "./Description.module.scss"

const Description: React.FC = () => (
  <div className={Container}>
    <Login />
  </div>
)

export default Description
