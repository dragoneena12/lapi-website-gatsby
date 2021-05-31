import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { GraphQLClient } from "graphql-request"
import { useForm } from "react-hook-form"

import { getSdk, Hotel } from "../../generated/graphql"
import { TokenContext } from "../../Context"
import { SpinnerLoader } from "../common/Spinner.module.scss"
import {
  Container,
  Form,
  Input,
  TextArea,
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
  const defaultValues =
    edit && hotel
      ? {
          name: hotel.name,
          location: hotel.location,
          carbonAwards: hotel.carbonAwards.join("\n"),
          fullereneAwards: hotel.fullereneAwards.join("\n"),
          carbonNanotubeAwards: hotel.carbonNanotubeAwards.join("\n"),
          grapheneAwards: hotel.grapheneAwards.join("\n"),
          diamondAwards: hotel.diamondAwards.join("\n"),
        }
      : {}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    criteriaMode: "all",
    mode: "onChange",
    defaultValues: defaultValues,
  })
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
        if (edit && hotel) {
          const sendData = {
            id: hotel.id,
            name: data.name,
            location: data.location,
            carbonAwards: data.carbonAwards.split("\n"),
            fullereneAwards: data.fullereneAwards.split("\n"),
            carbonNanotubeAwards: data.carbonNanotubeAwards.split("\n"),
            grapheneAwards: data.grapheneAwards.split("\n"),
            diamondAwards: data.diamondAwards.split("\n"),
          }
          await sdk.editHotel(sendData)
        } else {
          const sendData = {
            name: data.name,
            location: data.location,
            carbonAwards: data.carbonAwards.split("\n"),
            fullereneAwards: data.fullereneAwards.split("\n"),
            carbonNanotubeAwards: data.carbonNanotubeAwards.split("\n"),
            grapheneAwards: data.grapheneAwards.split("\n"),
            diamondAwards: data.diamondAwards.split("\n"),
          }
          await sdk.addHotel(sendData)
        }
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
      <h1>{edit ? "ホテル情報編集" : "新規ホテル追加"}</h1>
      <form onSubmit={onSubmit} className={Form}>
        <label htmlFor="name">ホテル名</label>
        <input
          id="name"
          className={Input}
          {...register("name", { required: "この項目は必須です" })}
        />
        {errors.name && <p className={ErrorText}>{errors.name.message}</p>}
        <label htmlFor="location">場所</label>
        <input
          id="location"
          className={Input}
          {...register("location", { required: "この項目は必須です" })}
        />
        {errors.location && (
          <p className={ErrorText}>{errors.location.message}</p>
        )}
        <label htmlFor="carbonAwards">カーボン特典</label>
        <textarea
          id="carbonAwards"
          className={TextArea}
          {...register("carbonAwards", { required: "この項目は必須です" })}
        />
        {errors.carbonAwards && (
          <p className={ErrorText}>{errors.carbonAwards.message}</p>
        )}
        <label htmlFor="fullereneAwards">フラーレン特典</label>
        <textarea
          id="fullereneAwards"
          className={TextArea}
          {...register("fullereneAwards", { required: "この項目は必須です" })}
        />
        {errors.fullereneAwards && (
          <p className={ErrorText}>{errors.fullereneAwards.message}</p>
        )}
        <label htmlFor="carbonNanotubeAwards">カーボンナノチューブ特典</label>
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
        <label htmlFor="grapheneAwards">グラフェン特典</label>
        <textarea
          id="grapheneAwards"
          className={TextArea}
          {...register("grapheneAwards", { required: "この項目は必須です" })}
        />
        {errors.grapheneAwards && (
          <p className={ErrorText}>{errors.grapheneAwards.message}</p>
        )}
        <label htmlFor="diamondAwards">ダイアモンド特典</label>
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
          {isLoading && <div className={SpinnerLoader} />}
          {!isLoading && !result && <input type="submit" className={Button} />}
          {!isLoading && (
            <Link to="/hotel" className={Button}>
              戻る
            </Link>
          )}
        </div>
      </form>
    </div>
  )
}

export default AddHotel
