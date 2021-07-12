import React, { useState, useEffect, useContext } from "react"
import { GraphQLClient } from "graphql-request"

import { TokenContext } from "../../Context"
import { getSdk, Stay } from "../../generated/graphql"
import SEO from "../../components/seo"
import StayHistory from "../../components/Hotel/StayHistory"
import { SpinnerLoader } from "../../components/common/Spinner.module.scss"

const API_BASE = process.env.GATSBY_API_URL || ""

const HotelHistoryPage: React.FC = () => {
  const [stays, setStays] = useState<Partial<Stay>[] | undefined>(undefined)
  const { token } = useContext(TokenContext)

  useEffect(() => {
    ;(async () => {
      const client = new GraphQLClient(API_BASE, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      const sdk = getSdk(client)
      const response = await sdk.findMyStays()
      setStays(response.stays)
    })()
  }, [])
  return (
    <>
      <SEO title="Stay History" />
      {stays ? <StayHistory stays={stays} /> : <SpinnerLoader />}
    </>
  )
}

export default HotelHistoryPage
