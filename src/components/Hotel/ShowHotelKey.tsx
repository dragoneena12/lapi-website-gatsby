import React from "react"
import { Link } from "gatsby"
import QRCode from "qrcode.react"
import { HotelKey } from "../../generated/graphql"

import { Container, Button } from "./ShowHotelKey.module.scss"

type Props = {
  hotelKey: HotelKey
}

const ShowHotelKey: React.FC<Props> = ({ hotelKey }) => {
  return (
    <div className={Container}>
      <h1>OTP Setting</h1>
      <QRCode value={hotelKey.key} size={256} includeMargin />
      <p>
        Google Authenticatorなどの二段階認証ソフトウェアで読み込んでください
      </p>
      <Link to="/hotel" className={Button}>
        戻る
      </Link>
    </div>
  )
}

export default ShowHotelKey
