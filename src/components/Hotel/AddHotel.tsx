import React, { useContext } from "react"
import { GraphQLClient } from "graphql-request"
import { useForm } from "react-hook-form"

import Heading from "../common/Heading"
import Fuwa from "../utils/Fuwa"
import { getSdk } from "../../generated/graphql"
import { TokenContext } from "../../Context"
import {
  Container,
  Input,
  TextArea,
  Label,
  Button,
} from "./AddHotel.module.scss"

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
      <Heading>新規ホテル追加</Heading>
      <Fuwa>
        <form onSubmit={onSubmit} className={Container}>
          <label htmlFor="name" className={Label}>
            ホテル名
          </label>
          <input
            id="name"
            className={Input}
            {...register("name", { required: true })}
          />
          <label htmlFor="location" className={Label}>
            場所
          </label>
          <input
            id="location"
            className={Input}
            {...register("location", { required: true })}
          />
          <label htmlFor="carbonAwards" className={Label}>
            カーボン特典
          </label>
          <textarea
            id="carbonAwards"
            className={TextArea}
            {...register("carbonAwards", { required: true })}
          />
          <label htmlFor="fullereneAwards" className={Label}>
            フラーレン特典
          </label>
          <textarea
            id="fullereneAwards"
            className={TextArea}
            {...register("fullereneAwards", { required: true })}
          />
          <label htmlFor="carbonNanotubeAwards" className={Label}>
            カーボンナノチューブ特典
          </label>
          <textarea
            id="carbonNanotubeAwards"
            className={TextArea}
            {...register("carbonNanotubeAwards", { required: true })}
          />
          <label htmlFor="grapheneAwards" className={Label}>
            グラフェン特典
          </label>
          <textarea
            id="grapheneAwards"
            className={TextArea}
            {...register("grapheneAwards", { required: true })}
          />
          <label htmlFor="diamondAwards" className={Label}>
            ダイアモンド特典
          </label>
          <textarea
            id="diamondAwards"
            className={TextArea}
            {...register("diamondAwards", { required: true })}
          />
          <input type="submit" className={Button} />
        </form>
      </Fuwa>
    </div>
  )
}

export default AddHotel
