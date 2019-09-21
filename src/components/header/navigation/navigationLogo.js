import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const NavigationLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <NavigationLogoContainer>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </NavigationLogoContainer>
  )
}

const NavigationLogoContainer = styled.div`
  width: 50px;
  align-self: center;
  cursor: pointer;
`
