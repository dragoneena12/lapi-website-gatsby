import React from "react"

import Logout from "./Logout"
import * as classes from "./Profile.module.scss"

type Props = {
  image?: string;
  name?: string;
}

const Profile: React.FC<Props> = ({image, name}) => {
  return (
    <>
        <div className={classes.Profile}>
          <img
            className={classes.Icon}
            src={image?.replace(/_normal.jpg/g, "_200x200.jpg")}
            alt={name}
            placeholder="none"
          />
          <div className={classes.TextContainer}>
            <h2>{name}</h2>
            <Logout />
          </div>
        </div>
    </>
  )
}

export default Profile
