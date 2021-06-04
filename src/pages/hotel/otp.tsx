import React, { useState, useEffect, useContext } from "react"
import { GraphQLClient } from "graphql-request"
import { useQueryParam, NumberParam } from "use-query-params"

import { TokenContext } from "../../Context"
import { getSdk, HotelKey } from "../../generated/graphql"
import SEO from "../../components/seo"
import ShowHotelKey from "../../components/Hotel/ShowHotelKey"
import { SpinnerLoader } from "../../components/common/Spinner.module.scss"

const API_BASE = process.env.GATSBY_API_URL || ""

const OneTimePasswordPage: React.FC = () => {
  const [hotelKey, setHotelKey] = useState<HotelKey | undefined>(undefined)
  const [id] = useQueryParam("id", NumberParam)
  const { token } = useContext(TokenContext)

  useEffect(() => {
    ;(async () => {
      const client = new GraphQLClient(API_BASE, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      const sdk = getSdk(client)
      const response = await sdk.getHotelKey({ id: String(id) })
      setHotelKey(response.hotelKey)
    })()
  }, [id])
  return (
    <>
      <SEO title="Hotel OTP" />
      {hotelKey ? <ShowHotelKey hotelKey={hotelKey} /> : <SpinnerLoader />}
    </>
  )
}

export default OneTimePasswordPage
