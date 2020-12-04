import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { ProfileIconImageQuery } from "../../../types/graphql-types"

import classes from "./Profile.module.scss"

const Profile: React.FC = () => {
  const data = useStaticQuery<ProfileIconImageQuery>(graphql`
    query ProfileIconImage {
      profileIconImage: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.profileIconImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <>
      <h1 className={classes.Heading}>About</h1>
      <div className={classes.Profile}>
        <Img
          className={classes.Icon}
          fluid={data.profileIconImage.childImageSharp.fluid}
        />
        <div className={classes.TextContainer}>
          <h2>るりいろ(lapi-ruriiro)</h2>
          <p>Japanese Furry / Web Developer / Infrastructure Engineer</p>
          <Link
            to="https://twitter.com/dragoneena12"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.TwitterLink}
          >
            @dragoneena12
          </Link>
          <Link
            to="https://github.com/dragoneena12"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.GithubLink}
          >
            @dragoneena12
          </Link>
        </div>
      </div>
    </>
  )
}

export default Profile
