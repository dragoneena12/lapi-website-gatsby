import React from "react"

import Profile from "./Profile"
import Like from "./Like"
import Works from "./Works"
import * as classes from "./Home.module.scss"

const Home: React.FC = () => (
  <div className={classes.Home}>
    <Profile />
    <Like />
    <Works />
  </div>
)

export default Home
