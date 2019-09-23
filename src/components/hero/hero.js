import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, H1, P, SocialIcons } from "./../"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "male-profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledContainer id="about-me">
      <Flex>
        <Column1>
          <H1>Richard Taylor Dawson</H1>
          <P>I'm a software engineer based in Salt Lake City, UT specializing in building exceptional, high-quality websites and applications.</P>
          <SocialIcons />
        </Column1>
        <Column2>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="profile of male" />
        </Column2>
      </Flex>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  height: 100vh;
  border: 3px solid black;
`

const Flex = styled.div`
  display: flex;
`

const Column1 = styled.div`
  width: 55%;
`

const Column2 = styled.div`
  width: 45%;

  img {
    width: 80%;
    margin: 0 auto;
    float: right;
  }
`
