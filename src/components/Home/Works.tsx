import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { WorksImageQuery } from "../../../types/graphql-types"

import classes from "./Works.module.scss"

const Works: React.FC = () => {
  const data = useStaticQuery<WorksImageQuery>(graphql`
    query WorksImage {
      jmof2022Image: file(relativePath: { eq: "jmof2022.png" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      furportImage: file(relativePath: { eq: "furport.png" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      pokerImage: file(relativePath: { eq: "poker.png" }) {
        childImageSharp {
          fluid(maxHeight: 600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  if (!data?.pokerImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  if (!data?.furportImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return (
    <>
      <h1 className={classes.Heading}>Works</h1>
      <div className={classes.Works}>
        <div className={classes.Box}>
          <div className={classes.PictureContainer}>
            <Img
              fluid={{
                ...data.jmof2022Image.childImageSharp.fluid,
                aspectRatio: 1.6,
              }}
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
        <div className={classes.Box}>
          <div className={classes.PictureContainer}>
            <Img
              fluid={{
                ...data.furportImage.childImageSharp.fluid,
                aspectRatio: 1.6,
              }}
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
        <div className={classes.Box}>
          <div className={classes.PictureContainer}>
            <Img
              fluid={{
                ...data.pokerImage.childImageSharp.fluid,
                aspectRatio: 1.6,
              }}
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
      </div>
    </>
  )
}

export default Works
