import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
    <div className={classes.Profile}>
      <Img fluid={data.profileIconImage.childImageSharp.fluid} />
    </div>
  )
}

export default Profile
