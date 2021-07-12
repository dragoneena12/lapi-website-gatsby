import React from "react"
import { Link } from "gatsby"

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
            <p>{`チェックイン：${new Date(stay.checkin).toDateString()}`}</p>
            <p>{`チェックアウト：${new Date(stay.checkout).toDateString()}`}</p>
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
