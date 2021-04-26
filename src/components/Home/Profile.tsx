import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Fuwa from "../utils/Fuwa"
import classes from "./Profile.module.scss"

const Profile: React.FC = () => {
  return (
    <>
      <Fuwa>
        <h1 className={classes.Heading}>About</h1>
        <div className={classes.Profile}>
          <StaticImage
            className={classes.Icon}
            src="../../images/icon.png"
            alt="lapi icon"
            placeholder="none"
          />
          <div className={classes.TextContainer}>
            <h2>るりいろ(lapi-ruriiro)</h2>
            <p>Japanese Furry / Web Developer / Infrastructure Engineer</p>
            <Link
              to="https://twitter.com/dragoneena12"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.TwitterLink}
            >
              @dragoneena12
            </Link>
            <Link
              to="https://github.com/dragoneena12"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.GithubLink}
            >
              @dragoneena12
            </Link>
          </div>
        </div>
      </Fuwa>
    </>
  )
}

export default Profile
