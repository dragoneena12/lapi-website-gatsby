import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Fuwa from "../utils/Fuwa"
import * as classes from "./Fetherdra.module.scss"
const Fetherdra: React.FC = () => (
  <Fuwa>
    <div className={classes.Container}>
      <div className={classes.Description}>
        <h2>フェザードラゴネット（Feather Dragonet）</h2>
        <ul className={classes.List}>
          <li>種族：ドラゴン？</li>
          <li>性別：♂？</li>
        </ul>
        <p>
          <a
            href="https://suko-doge.booth.pm/"
            target="_blank"
            rel="noopenner noreferrer"
            className={classes.Link}
          >
            バウワウナード
          </a>
          製のフェザドラちゃん改変です。あおくてかわいい。
        </p>
        <p>
          <a
            href="https://hub.vroid.com/characters/5332191322326023168/models/7463918390285866524"
            target="_blank"
            rel="noopenner noreferrer"
            className={classes.Link}
          >
            VRoidHubで見る
          </a>
        </p>
      </div>
      <StaticImage
        className={classes.Large4}
        src="../../images/fetherdra/pic1.jpg"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large2}
        src="../../images/fetherdra/pic2.jpg"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large1}
        src="../../images/fetherdra/pic3.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/fetherdra/pic4.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large6}
        src="../../images/fetherdra/pic5.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/fetherdra/pic6.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/fetherdra/pic7.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/fetherdra/pic8.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/fetherdra/pic9.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large5}
        src="../../images/fetherdra/pic10.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Image}
        src="../../images/fetherdra/pic11.png"
        alt="fetherdra picture"
        placeholder="none"
      />
      <StaticImage
        className={classes.Large3}
        src="../../images/fetherdra/pic12.png"
        alt="fetherdra picture"
        placeholder="none"
      />
    </div>
  </Fuwa>
)

export default Fetherdra
