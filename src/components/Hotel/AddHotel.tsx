import React, { useState, useContext } from "react"
import { GraphQLClient } from "graphql-request"
import { useForm } from "react-hook-form"

import Heading from "../common/Heading"
import Fuwa from "../utils/Fuwa"
import { getSdk, Hotel } from "../../generated/graphql"
import { TokenContext } from "../../Context"
import { SpinnerLoader } from "../common/Spinner.module.scss"
import {
  Container,
  Input,
  TextArea,
  Label,
  SubmitContainer,
  Button,
  ErrorText,
  SuccessText,
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

type Props = {
  edit: boolean
  hotel?: Hotel
}

const AddHotel: React.FC<Props> = ({ edit, hotel }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState("")
  const [err, setErr] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ criteriaMode: "all", mode: "onChange" })
  const { token } = useContext(TokenContext)

  const onSubmit = handleSubmit(data => {
    setIsLoading(true)
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
        setIsLoading(false)
        setResult("正常に登録しました！")
        setErr("")
      } catch (e) {
        setIsLoading(false)
        setResult("")
        setErr(e.response.errors[0].message)
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
            {...register("name", { required: "この項目は必須です" })}
          />
          {errors.name && <p className={ErrorText}>{errors.name.message}</p>}
          <label htmlFor="location" className={Label}>
            場所
          </label>
          <input
            id="location"
            className={Input}
            {...register("location", { required: "この項目は必須です" })}
          />
          {errors.location && (
            <p className={ErrorText}>{errors.location.message}</p>
          )}
          <label htmlFor="carbonAwards" className={Label}>
            カーボン特典
          </label>
          <textarea
            id="carbonAwards"
            className={TextArea}
            {...register("carbonAwards", { required: "この項目は必須です" })}
          />
          {errors.carbonAwards && (
            <p className={ErrorText}>{errors.carbonAwards.message}</p>
          )}
          <label htmlFor="fullereneAwards" className={Label}>
            フラーレン特典
          </label>
          <textarea
            id="fullereneAwards"
            className={TextArea}
            {...register("fullereneAwards", { required: "この項目は必須です" })}
          />
          {errors.fullereneAwards && (
            <p className={ErrorText}>{errors.fullereneAwards.message}</p>
          )}
          <label htmlFor="carbonNanotubeAwards" className={Label}>
            カーボンナノチューブ特典
          </label>
          <textarea
            id="carbonNanotubeAwards"
            className={TextArea}
            {...register("carbonNanotubeAwards", {
              required: "この項目は必須です",
            })}
          />
          {errors.carbonNanotubeAwards && (
            <p className={ErrorText}>{errors.carbonNanotubeAwards.message}</p>
          )}
          <label htmlFor="grapheneAwards" className={Label}>
            グラフェン特典
          </label>
          <textarea
            id="grapheneAwards"
            className={TextArea}
            {...register("grapheneAwards", { required: "この項目は必須です" })}
          />
          {errors.grapheneAwards && (
            <p className={ErrorText}>{errors.grapheneAwards.message}</p>
          )}
          <label htmlFor="diamondAwards" className={Label}>
            ダイアモンド特典
          </label>
          <textarea
            id="diamondAwards"
            className={TextArea}
            {...register("diamondAwards", { required: "この項目は必須です" })}
          />
          {errors.diamondAwards && (
            <p className={ErrorText}>{errors.diamondAwards.message}</p>
          )}
          <div className={SubmitContainer}>
            {err && <p className={ErrorText}>{err}</p>}
            {result && <p className={SuccessText}>{result}</p>}
            {isLoading && <SpinnerLoader />}
            {!isLoading && !result && (
              <input type="submit" className={Button} />
            )}
          </div>
        </form>
      </Fuwa>
    </div>
  )
}

export default AddHotel
