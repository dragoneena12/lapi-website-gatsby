import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import { User } from "@auth0/auth0-react"
import { GraphQLClient } from "graphql-request"

import { getSdk, Stay } from "../../generated/graphql"
import { TokenContext } from "../../Context"
import Logout from "./Logout"
import * as classes from "./Profile.module.scss"

type Props = {
  user: User
}

const API_BASE = process.env.GATSBY_API_URL || ""

const Profile: React.FC<Props> = ({ user }) => {
  const [stays, setStays] = useState<Partial<Stay>[]>()
  const { token } = useContext(TokenContext)

  useEffect(() => {
    if (token) {
      ;(async () => {
        const client = new GraphQLClient(API_BASE, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        const sdk = getSdk(client)
        const response = await sdk.findMyStays()
        setStays(response.stays)
      })()
    }
  }, [token])

  let stayTime = 0
  if (stays) {
    const zeroDate = new Date("0001-01-01T00:00:00Z")
    for (const stay of stays) {
      const checkinDate = new Date(stay.checkin)
      const checkoutDate = new Date(stay.checkout)
      if (checkoutDate.getTime() === zeroDate.getTime()) {
        continue
      }
      stayTime += checkoutDate.getTime() - checkinDate.getTime()
    }
  }

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
              <span key={role} className={classes.Role}>
                {role}
              </span>
            ))}
          </div>
          {user["https://lapi.tokyo/claims/roles"].includes("PARTNER") && (
            <Link to="/hotel/add" className={classes.Button}>
              新規ホテル追加
            </Link>
          )}
          <Logout />
        </div>
        <div className={classes.TextContainer}>
          <p>{`滞在合計：${Math.floor(stayTime / 1000 / 60 / 60 * 100) / 100} 時間`}</p>
          {stays?.map(stay => (
            <p key={stay.id}>{stay.checkin + "-" + stay.checkout}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Profile
