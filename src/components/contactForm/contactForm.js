import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Form, Container, Columns, H2, H3, P } from ".."

export const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "message-man.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container id="contact">
      <H2>Contact</H2>
      <Columns>
        <div>
          <H3>Want to get in touch?</H3>
          <P>I’d love to hear from you whether you just want to connect, say hi, or discuss a potential project.</P>
          <P>I will get to you as soon as I can <span role="img" aria-label="call me hand emoji">🤙</span></P>
          <ImageContainer>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </ImageContainer>
        </div>
        <Form />
      </Columns>
    </Container>
  )
}

const ImageContainer = styled.div`
  width: 70%;
  margin: auto;
`
