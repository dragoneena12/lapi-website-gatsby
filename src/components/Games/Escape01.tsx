import React from "react"
import Unity, { UnityContent } from "react-unity-webgl"

import * as classes from "./Escape01.module.scss"

const unityContent = new UnityContent(
  "/unity/escape01/Build.json",
  "/unity/escape01/UnityLoader.js"
)

const Escape01: React.FC = () => {
  return (
    <div className={classes.Escape01 + " mx-auto"}>
      <Unity unityContent={unityContent} />
      <div className={classes.Explanation}>
        <h3>Escape01</h3>
        <p>
          Unityで初めて作った謎の脱出ゲームです。
          <br />
          PCのみ対応。マウスだけで操作します。
        </p>
      </div>
    </div>
  )
}

export default Escape01
