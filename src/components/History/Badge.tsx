import React from "react"

import * as tags from "./tags"
import {
  TsukikusaBadge,
  StaffBadge,
  OverseasBadge,
  OtherBadge,
  VRBadge,
} from "./Badge.module.scss"

type Props = {
  value: string
}

const Badge: React.FC<Props> = ({ value }) => {
  switch (value) {
    case tags.STAFF:
      return <div className={StaffBadge}>{value}</div>
    case tags.TSUKIKUSA:
      return <div className={TsukikusaBadge}>{value}</div>
    case tags.OVERSEAS:
      return <div className={OverseasBadge}>{value}</div>
    case tags.VR:
      return <div className={VRBadge}>{value}</div>
    default:
      return <div className={OtherBadge}>{value}</div>
  }
}

export default Badge
