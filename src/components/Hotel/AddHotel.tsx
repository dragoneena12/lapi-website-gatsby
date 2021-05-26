import React, { useContext } from "react"
import { GraphQLClient } from "graphql-request"
import { useForm } from "react-hook-form"

import { getSdk } from "../../generated/graphql"
import { TokenContext } from "../../Context"
import { Container } from "./AddHotel.module.scss"

const API_BASE = process.env.GATSBY_API_URL || ""

type FormData = {
  name: string
  location: string
}

const AddHotel: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const { token } = useContext(TokenContext)

  const onSubmit = handleSubmit(data => {
    ;(async () => {
      const client = new GraphQLClient(API_BASE, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      const sdk = getSdk(client)
      try {
        await sdk.addHotel({
          name: data.name,
          location: data.location,
        })
      } catch (e) {
        console.error(e)
      }
    })()
  })

  return (
    <div className={Container}>
      <form onSubmit={onSubmit}>
        <input {...register("name", { required: true })} />
        <input {...register("location", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddHotel
