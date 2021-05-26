import React from "react"
import { User } from "@auth0/auth0-react"

import Logout from "./Logout"
import * as classes from "./Profile.module.scss"

type Props = {
  user: User
}

const Profile: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className={classes.Profile}>
        <img
          className={classes.Icon}
          src={user.picture?.replace(/_normal.jpg/g, "_200x200.jpg")}
          alt={user.name}
          placeholder="none"
        />
        <div className={classes.TextContainer}>
          <h2>{user.name}</h2>
          <div className={classes.RoleContainer}>
            {user["https://lapi.tokyo/claims/roles"].map((role: string) => (
              <span key={role} className={classes.Role}>{role}</span>
            ))}
          </div>
          <Logout />
        </div>
      </div>
    </>
  )
}

export default Profile
