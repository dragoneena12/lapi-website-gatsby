import React from "react"
import { Link } from "gatsby"
import { format } from "date-fns"
import ja from "date-fns/locale/ja"

import { Stay } from "../../generated/graphql"
import { Container, BoxContainer, Box, Button } from "./StayHistory.module.scss"

const StayHistory: React.FC<{ stays: Partial<Stay>[] }> = ({ stays }) => (
  <div className={Container}>
    <h1>宿泊履歴</h1>
    {stays.length ? (
      <div className={BoxContainer}>
        {stays.map(stay => (
          <div className={Box} key={stay.id}>
            <h2>{stay.hotel?.name}</h2>
            {/* <p>{`宿泊ID：${stay.id}`}</p> */}
            <p>{`IN: ${format(new Date(stay.checkin), "Yo MMM do eeee", {
              locale: ja,
            })}`}</p>
            <p>{`OUT: ${format(new Date(stay.checkout), "Yo MMM do eeee", {
              locale: ja,
            })}`}</p>
          </div>
        ))}
      </div>
    ) : (
      <p>宿泊履歴がありません。</p>
    )}
    <Link to="/hotel" className={Button}>
      戻る
    </Link>
  </div>
)

export default StayHistory
