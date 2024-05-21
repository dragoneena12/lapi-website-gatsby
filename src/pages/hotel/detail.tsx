import React, { useState, useEffect } from "react"
import { GraphQLClient } from "graphql-request"
import { useQueryParam, StringParam } from "use-query-params"

import { getSdk, Hotel } from "../../generated/graphql"
import SEO from "../../components/seo"
import HotelDetail from "../../components/Hotel/HotelDetail"
import { SpinnerLoader } from "../../components/common/Spinner.module.scss"

const API_BASE = process.env.GATSBY_API_URL || ""

const HotelDetailPage: React.FC = () => {
  const [hotel, setHotel] = useState<Hotel | undefined>(undefined)
  const [id] = useQueryParam("id", StringParam)

  useEffect(() => {
    ;(async () => {
      const client = new GraphQLClient(API_BASE)
      const sdk = getSdk(client)
      const response = await sdk.getHotelDetail({ id: String(id) })
      setHotel(response.hotel)
    })()
  }, [id])
  return (
    <>
      <SEO title="Hotel Detail" />
      {hotel ? <HotelDetail hotel={hotel} /> : <SpinnerLoader />}
    </>
  )
}

export default HotelDetailPage
