import React, { useEffect, useContext } from "react"
import { useAuth0 } from "@auth0/auth0-react"

import Heading from "../common/Heading"
import Fuwa from "../utils/Fuwa"
import { TokenContext } from "../../Context"
import { SpinnerLoader } from "../common/Spinner.module.scss"
import Description from "./Description"
import Profile from "./Profile"
import HotelList from "./HotelList"
import { Container, Note, Loading } from "./Hotel.module.scss"

const Hotel: React.FC = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0()
  const { setToken } = useContext(TokenContext)

  useEffect(() => {
    ;(async () => {
      if (user) {
        try {
          const token = await getAccessTokenSilently({
            audience: "https://api.lapi.tokyo/v1/",
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
      <Fuwa>
        <p className={Note}>
          注：現在開発中のため、データは予告なく消えることがあります。
        </p>
      </Fuwa>
      <Fuwa>
        {isLoading ? (
          <div className={Loading}>
            <div className={SpinnerLoader} />
          </div>
        ) : user ? (
          <Profile user={user} />
        ) : (
          <Description />
        )}
      </Fuwa>
      <Fuwa>
        <HotelList isAuthenticated={isAuthenticated} />
      </Fuwa>
    </div>
  )
}

export default Hotel
