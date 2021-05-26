import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import Heading from "../common/Heading"
import Fuwa from "../utils/Fuwa"
import Description from "./Description"
import Profile from "./Profile"

import { Container } from "./Hotel.module.scss"

const Hotel: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    ;(async () => {
      if (user) {
        try {
          const token = await getAccessTokenSilently({
            audience: "https://api.lapi.tokyo/v1/",
          })
          console.log(token)
        } catch (e) {
          console.error(e)
        }
      }
    })()
  }, [user, getAccessTokenSilently])

  return (
    <div className={Container}>
      <Heading>Hotel System</Heading>
      <Fuwa>
      {user ? (
        <Profile image={user.picture} name={user.name} />
      ) : (
        <Description />
      )}</Fuwa>
    </div>
  )
}

export default Hotel
