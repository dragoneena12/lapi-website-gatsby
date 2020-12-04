import React from "react"

import Profile from "./Profile"
import classes from "./Home.module.scss"

const Home: React.FC = () => (
  <div className={classes.Home}>
    <Profile />
  </div>
)

export default Home
