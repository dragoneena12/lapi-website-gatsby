import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { User } from "@auth0/auth0-react"
import { GraphQLClient } from "graphql-request"
import { SemiCircle } from "progressbar.js"

import { SpinnerLoader } from "../common/Spinner.module.scss"
import { getSdk } from "../../generated/graphql"
import { TokenContext } from "../../Context"
import Logout from "./Logout"
import * as classes from "./Profile.module.scss"

type Props = {
  user: User
}

type Rank = {
  id: string
  name: string
  count: number
  eoa: boolean
}

export const Ranks: Rank[] = [
  {
    id: "carbon",
    name: "カーボン",
    count: 0,
    eoa: false,
  },
  {
    id: "fullerene",
    name: "フラーレン",
    count: 4,
    eoa: false,
  },
  {
    id: "carbonNanotube",
    name: "カーボンナノチューブ",
    count: 10,
    eoa: false,
  },
  {
    id: "graphene",
    name: "グラフェン",
    count: 25,
    eoa: false,
  },
  {
    id: "diamond",
    name: "ダイアモンド",
    count: 50,
    eoa: true,
  },
]

const API_BASE = process.env.GATSBY_API_URL || ""

const Profile: React.FC<Props> = ({ user }) => {
  const [stayCount, setStayCount] = useState<number | undefined>(undefined)
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
        const response = await sdk.stayCount()
        setStayCount(response.stayCount)
      })()
    }
  }, [token])

  useEffect(() => {
    if (stayCount !== undefined) {
      const bar = new SemiCircle("#progressContainer", {
        strokeWidth: 6,
        easing: "easeInOut",
        duration: 1400,
        color: "#00aa90",
        trailColor: "#fff",
        trailWidth: 6,
        svgStyle: null,
      })
      bar.animate(stayCount / 50)
    }
  }, [stayCount])

  let rank = 0
  if (stayCount !== undefined) {
    for (let i = 0; ; i++) {
      if (stayCount >= Ranks[i].count) {
        rank = i
      }
      if (Ranks[i].eoa) break
    }
  }

  return (
    <>
      <div className={classes.Profile}>
        <div className={classes.ProfileUIContainer}>
          <div className={classes.ProfileContainer}>
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
            </div>
          </div>
          {stayCount !== undefined ? (
            <div className={classes.ProgressContainer}>
              <div id="progressContainer" className={classes.Progress} />
              <p className={classes.ProgressText}>{`現在 ${stayCount} 泊`}</p>
              {!Ranks[rank].eoa && (
                <p className={classes.NextProgressText}>{`${
                  Ranks[rank + 1].name
                }まで残り ${Ranks[rank + 1].count - stayCount} 泊`}</p>
              )}
            </div>
          ) : (
            <div className={SpinnerLoader} />
          )}
        </div>
        <div className={classes.ProfileUIContainer}>
          {stayCount !== undefined ? (
            <div className={classes.TextContainer}>
              {Ranks[rank].id === "carbon" ? (
                <StaticImage
                  className={classes.CardBox}
                  imgClassName={classes.Card}
                  src="../../images/hotel/card_carbon.png"
                  alt="carbon"
                />
              ) : Ranks[rank].id === "fullerene" ? (
                <StaticImage
                  className={classes.CardBox}
                  imgClassName={classes.Card}
                  src="../../images/hotel/card_fullerene.png"
                  alt="carbon"
                />
              ) : Ranks[rank].id === "carbonNanotube" ? (
                <StaticImage
                  className={classes.CardBox}
                  imgClassName={classes.Card}
                  src="../../images/hotel/card_carbonNanotube.png"
                  alt="carbon"
                />
              ) : Ranks[rank].id === "graphene" ? (
                <StaticImage
                  className={classes.CardBox}
                  imgClassName={classes.Card}
                  src="../../images/hotel/card_graphene.png"
                  alt="carbon"
                />
              ) : Ranks[rank].id === "diamond" ? (
                <StaticImage
                  className={classes.CardBox}
                  imgClassName={classes.Card}
                  src="../../images/hotel/card_diamond.png"
                  alt="carbon"
                />
              ) : null}
            </div>
          ) : (
            <div className={SpinnerLoader} />
          )}
          {user["https://lapi.tokyo/claims/roles"].includes("PARTNER") && (
            <Link to="/hotel/add" className={classes.Button}>
              新規ホテル追加
            </Link>
          )}
          <Logout />
        </div>
      </div>
    </>
  )
}

export default Profile
