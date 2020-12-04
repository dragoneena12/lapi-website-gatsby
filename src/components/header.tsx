import { Link } from "gatsby"
import React from "react"

import classes from "./Header.module.scss"

const Header: React.FC = () => (
  <header className={classes.Header}>
    <Link to="/" className={classes.TitleText}>
      lapi.gq
    </Link>
  </header>
)

export default Header
