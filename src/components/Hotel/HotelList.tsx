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
  Success,
  Error,
} from "./HotelList.module.scss"

const API_BASE = process.env.GATSBY_API_URL || ""

type Props = {
  isAuthenticated: boolean
}

const HotelList: React.FC<Props> = ({ isAuthenticated }) => {
  const [hotels, setHotels] = useState<Partial<Hotel>[]>()
  const [checkedin, setCheckedin] = useState<boolean>(false)
  const [checkedout, setCheckedout] = useState<boolean>(false)
  const [err, setErr] = useState<string>("")
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
        setCheckedin(true)
        setErr("")
      } catch (e) {
        setErr(e.response.errors[0].message)
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
        setCheckedout(true)
        setErr("")
      } catch (e) {
        setErr(e.response.errors[0].message)
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
                {checkedin && <p className={Success}>チェックインしました！</p>}
                {checkedout && (
                  <p className={Success}>チェックアウトしました！</p>
                )}
                {!checkedin && !checkedout && (
                  <>
                    <button
                      className={Button}
                      onClick={() => checkin(hotel.id!)}
                    >
                      Check In
                    </button>
                    <button
                      className={Button}
                      onClick={() => checkout(hotel.id!)}
                    >
                      Check Out
                    </button>
                  </>
                )}
              </div>
            )}
            {err && <p className={Error}>{err}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelList
