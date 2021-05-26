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
  carbonAwards: string
  fullereneAwards: string
  carbonNanotubeAwards: string
  grapheneAwards: string
  diamondAwards: string
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
          carbonAwards: data.carbonAwards.split("\n"),
          fullereneAwards: data.fullereneAwards.split("\n"),
          carbonNanotubeAwards: data.carbonNanotubeAwards.split("\n"),
          grapheneAwards: data.grapheneAwards.split("\n"),
          diamondAwards: data.diamondAwards.split("\n"),
        })
      } catch (e) {
        console.error(e)
      }
    })()
  })

  return (
    <div className={Container}>
      <div className={Container}>
        <h2>新規ホテル追加</h2>
      </div>
      <form onSubmit={onSubmit} className={Container}>
        <input {...register("name", { required: true })} />
        <input {...register("location", { required: true })} />
        <textarea {...register("carbonAwards", { required: true })} />
        <textarea {...register("fullereneAwards", { required: true })} />
        <textarea {...register("carbonNanotubeAwards", { required: true })} />
        <textarea {...register("grapheneAwards", { required: true })} />
        <textarea {...register("diamondAwards", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddHotel
