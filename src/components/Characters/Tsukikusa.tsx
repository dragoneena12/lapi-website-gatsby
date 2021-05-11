import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Fuwa from "../utils/Fuwa"
import * as classes from "./Tsukikusa.module.scss"
const Tsukikusa: React.FC = () => (
  <Fuwa>
    <div className={classes.Container}>
      <div className={classes.Description}>
        <h2>つきくさ(Tsukikusa)</h2>
        <ul className={classes.List}>
          <li>種族：けも竜</li>
          <li>性別：♂</li>
        </ul>
        <p>
          自作をしたキャラクターです。とある別のドラゴンのキャラクターに感動してその勢いで制作してしまいました。ほっぺの模様がチャームポイント。割と恥ずかしがりなところもあるので優しく接してあげてください。
        </p>
      </div>
      <StaticImage
        className={classes.Large1}
        src="../../images/tsukikusa/pic1.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large2}
        src="../../images/tsukikusa/pic2.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/tsukikusa/pic3.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/tsukikusa/pic4.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large6}
        src="../../images/tsukikusa/pic5.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large4}
        src="../../images/tsukikusa/pic6.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/tsukikusa/pic7.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/tsukikusa/pic8.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/tsukikusa/pic9.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large5}
        src="../../images/tsukikusa/fig1.png"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/tsukikusa/fig2.jpg"
        alt="tsukikusa picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large3}
        src="../../images/tsukikusa/fig3.png"
        alt="tsukikusa picture"
        placeholder="none"
      />
    </div>
  </Fuwa>
)

export default Tsukikusa
