import React, { useState, useEffect, useContext } from "react"
import { GraphQLClient } from "graphql-request"
import { getSdk, Hotel } from "../../generated/graphql"
import { TokenContext } from "../../Context"

import {
  Container,
  CardDeck,
  HotelCard,
  HotelDescription,
  Button,
  ButtonContainer,
} from "./HotelList.module.scss"

const API_BASE = process.env.GATSBY_API_URL || ""

type Props = {
  isAuthenticated: boolean
}

const HotelList: React.FC<Props> = ({ isAuthenticated }) => {
  const [hotels, setHotels] = useState<Partial<Hotel>[]>()
  const { token } = useContext(TokenContext)

  useEffect(() => {
    ;(async () => {
      const client = new GraphQLClient(API_BASE)
      const sdk = getSdk(client)
      const response = await sdk.findHotels()
      setHotels(response.hotels)
    })()
  }, [])

  const checkin = (hotelId: string) => {
    ;(async () => {
      const client = new GraphQLClient(API_BASE, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      const sdk = getSdk(client)
      try {
        await sdk.checkin({
          hotelId: hotelId,
        })
      } catch (e) {
        console.error(e)
      }
    })()
  }
  const checkout = (hotelId: string) => {
    ;(async () => {
      const client = new GraphQLClient(API_BASE, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      const sdk = getSdk(client)
      try {
        await sdk.checkout({
          hotelId: hotelId,
        })
      } catch (e) {
        console.error(e)
      }
    })()
  }

  return (
    <div className={Container}>
      <div className={Container}>
        <h2>グループホテル一覧</h2>
      </div>
      <div className={CardDeck}>
        {hotels?.map(hotel => (
          <div key={hotel.id} className={HotelCard}>
            <div className={HotelDescription}>
              <div>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
              </div>
            </div>
            {isAuthenticated && (
              <div className={ButtonContainer}>
                <button className={Button} onClick={() => checkin(hotel.id!)}>
                  Check In
                </button>
                <button className={Button} onClick={() => checkout(hotel.id!)}>
                  Check Out
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelList
