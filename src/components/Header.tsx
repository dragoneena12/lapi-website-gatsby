import { Link } from "gatsby"
import React from "react"

import * as classes from "./Header.module.scss"

const Header: React.FC = () => (
  <header className={classes.Header}>
    <Link to="/" className={classes.TitleText}>
      lapi.tokyo
    </Link>
    <Link to="/" className={classes.Link} activeClassName={classes.ActiveLink}>
      Home
    </Link>
    <Link
      to="/characters/"
      className={classes.Link}
      activeClassName={classes.ActiveLink}
    >
      Characters
    </Link>
    <Link
      to="/history/"
      className={classes.Link}
      activeClassName={classes.ActiveLink}
      partiallyActive
    >
      History
    </Link>
    <Link
      to="/hotel/"
      className={classes.Link}
      activeClassName={classes.ActiveLink}
      partiallyActive
    >
      Hotel
    </Link>
    <Link
      to="/games/"
      className={classes.Link}
      activeClassName={classes.ActiveLink}
      partiallyActive
    >
      Games
    </Link>
  </header>
)

export default Header
