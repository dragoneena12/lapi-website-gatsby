import React from "react"
import { Link } from "gatsby"

import Heading from "../common/Heading"
import Fuwa from "../utils/Fuwa"
import { Hotel } from "../../generated/graphql"
import { Ranks } from "./Profile"
import {
  Container,
  Button,
  BoxWrapper,
  Box,
  List,
  Text,
} from "./HotelDetail.module.scss"

type Props = {
  hotel: Hotel
}

const HotelDetail: React.FC<Props> = ({ hotel }) => {
  return (
    <div className={Container}>
      <Heading>{hotel.name}</Heading>
      <div className={BoxWrapper}>
        <Fuwa>
          <div className={Box}>
            <h2 className={Text}>{Ranks[0].name}</h2>
            <h3 className={Text}>{`宿泊数 ${Ranks[0].count} 泊以上`}</h3>
            <ul className={List}>
              {hotel.carbonAwards.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </Fuwa>
        <Fuwa>
          <div className={Box}>
            <h2 className={Text}>{Ranks[1].name}</h2>
            <h3 className={Text}>{`宿泊数 ${Ranks[1].count} 泊以上`}</h3>
            <ul className={List}>
              {hotel.fullereneAwards.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </Fuwa>
        <Fuwa>
          <div className={Box}>
            <h2 className={Text}>{Ranks[2].name}</h2>
            <h3 className={Text}>{`宿泊数 ${Ranks[2].count} 泊以上`}</h3>
            <ul className={List}>
              {hotel.carbonNanotubeAwards.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </Fuwa>
        <Fuwa>
          <div className={Box}>
            <h2 className={Text}>{Ranks[3].name}</h2>
            <h3 className={Text}>{`宿泊数 ${Ranks[3].count} 泊以上`}</h3>
            <ul className={List}>
              {hotel.grapheneAwards.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </Fuwa>
        <Fuwa>
          <div className={Box}>
            <h2 className={Text}>{Ranks[4].name}</h2>
            <h3 className={Text}>{`宿泊数 ${Ranks[4].count} 泊以上`}</h3>
            <ul className={List}>
              {hotel.diamondAwards.map(el => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </Fuwa>
      </div>
      <Link to="/hotel" className={Button}>
        戻る
      </Link>
    </div>
  )
}

export default HotelDetail
