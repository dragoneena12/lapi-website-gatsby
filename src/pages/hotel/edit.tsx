import React, { useState, useEffect } from "react"
import { GraphQLClient } from "graphql-request"
import { useQueryParam, NumberParam } from "use-query-params"

import { getSdk, Hotel } from "../../generated/graphql"
import SEO from "../../components/seo"
import AddHotel from "../../components/Hotel/AddHotel"
import { SpinnerLoader } from "../../components/common/Spinner.module.scss"

const API_BASE = process.env.GATSBY_API_URL || ""

const EditHotelPage: React.FC = () => {
  const [hotel, setHotel] = useState<Hotel | undefined>(undefined)
  const [id] = useQueryParam("id", NumberParam)

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
      <SEO title="Edit Hotel" />
      {hotel ? <AddHotel edit={true} hotel={hotel} /> : <SpinnerLoader />}
    </>
  )
}

export default EditHotelPage
