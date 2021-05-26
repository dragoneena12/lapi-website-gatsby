import React, { useState, useEffect } from "react"
import { GraphQLClient } from "graphql-request"
import { getSdk, Hotel } from "../../generated/graphql"

import { Container } from "./HotelList.module.scss"

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
      <h2>ホテル一覧</h2>
      {hotels?.map(hotel => (
        <div key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p>{hotel.location}</p>
        </div>
      ))}
    </div>
  )
}

export default HotelList
