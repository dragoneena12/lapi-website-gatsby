import React, { useEffect, useContext } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import Heading from "../common/Heading"
import { TokenContext } from "../../Context"
import { SpinnerLoader } from "../common/Spinner.module.scss"
import Description from "./Description"
import Profile from "./Profile"
import HotelList from "./HotelList"
import { Container, Loading } from "./Hotel.module.scss"

const Hotel: React.FC = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
  const { setToken } = useContext(TokenContext)

  useEffect(() => {
    ;(async () => {
      if (user) {
        try {
          const token = await getAccessTokenSilently({
            audience: "https://api.lapi.tokyo/graphql",
          })
          setToken(token)
        } catch (e) {
          console.error(e)
        }
      }
    })()
  }, [user, getAccessTokenSilently, setToken])

  return (
    <div className={Container}>
      <Heading>Hotel System</Heading>

      {isLoading ? (
        <div className={Loading}>
          <div className={SpinnerLoader} />
        </div>
      ) : user ? (
        <Profile user={user} />
      ) : (
        <Description />
      )}

      <HotelList isAuthenticated={isAuthenticated} user={user} />
    </div>
  )
}

export default Hotel
