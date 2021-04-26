import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Fuwa from "../utils/Fuwa"
import classes from "./Works.module.scss"

const Works: React.FC = () => {
  return (
    <>
      <Fuwa>
        <h1 className={classes.Heading}>Works</h1>
      </Fuwa>
      <div className={classes.Works}>
        <Fuwa>
          <div className={classes.Box}>
            <div className={classes.PictureContainer}>
              <StaticImage
                src="../../images/jmof2022.png"
                alt="jmof2022"
                placeholder="none"
                aspectRatio={1.6}
                transformOptions={{fit: "cover"}}
                className={classes.PictureCrop}
              />
              <h2 className={classes.BoxHeading}>JMoF2022</h2>
            </div>
            <div className={classes.TextContainer}>
              <p>公式Webサイトのフロントエンドコーディングを担当しました。</p>
              <a
                href="https://www.jmof.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.Link}
              >
                Go
              </a>
            </div>
          </div>
        </Fuwa>
        <Fuwa>
          <div className={classes.Box}>
            <div className={classes.PictureContainer}>
              <StaticImage
                src="../../images/furport.png"
                alt="furport"
                placeholder="none"
                aspectRatio={1.6}
                className={classes.PictureCrop}
              />
              <h2 className={classes.BoxHeading}>FurPort</h2>
            </div>
            <div className={classes.TextContainer}>
              <p>ケモノ・Furryイベントの情報をまとめ、記録ができるアプリ。</p>
              <a
                href="https://www.furport.tk/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.Link}
              >
                Go
              </a>
              <a
                href="https://github.com/lapi-hotel-group/furport-front"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.Link}
              >
                Github
              </a>
            </div>
          </div>
        </Fuwa>
        <Fuwa>
          <div className={classes.Box}>
            <div className={classes.PictureContainer}>
              <StaticImage
                src="../../images/poker.png"
                alt="poker"
                placeholder="none"
                aspectRatio={1.6}
                className={classes.PictureCrop}
              />
              <h2 className={classes.BoxHeading}>Texias Hold&apos;em</h2>
            </div>
            <div className={classes.TextContainer}>
              <p>
                簡単にテキサスホールデムのネット対戦を楽しめるアプリ。思い出したときにぼちぼち製作中。
              </p>
              <a
                href="https://poker.lapi.gq/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.Link}
              >
                Go
              </a>
              <a
                href="https://github.com/dragoneena12/holdem-front"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.Link}
              >
                Github
              </a>
            </div>
          </div>
        </Fuwa>
      </div>
    </>
  )
}

export default Works
