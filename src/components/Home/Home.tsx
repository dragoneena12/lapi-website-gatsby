import React from "react"

import Profile from "./Profile"
import Like from "./Like"
import classes from "./Home.module.scss"

const Home: React.FC = () => (
  <div className={classes.Home}>
    <Profile />
    <Like />
  </div>
)

export default Home
