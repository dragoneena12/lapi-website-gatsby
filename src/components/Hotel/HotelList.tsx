import React, { useState, useEffect } from "react"
import { GraphQLClient } from "graphql-request"
import { getSdk, Hotel } from "../../generated/graphql"

import { Container, CardDeck, HotelCard } from "./HotelList.module.scss"

const API_BASE = process.env.GATSBY_API_URL || ""

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>()
  useEffect(() => {
    ;(async () => {
      const client = new GraphQLClient(API_BASE)
      const sdk = getSdk(client)
      const response = await sdk.findHotels()
      setHotels(response.hotels)
    })()
  }, [])

  return (
    <div className={Container}>
      <div className={Container}>
        <h2>グループホテル一覧</h2>
      </div>
      <div className={CardDeck}>
        {hotels?.map(hotel => (
          <div key={hotel.id} className={HotelCard}>
            <div>
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelList
