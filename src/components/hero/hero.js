import React from "react"
import styled from "@emotion/styled"
import { Container, H1, P, SocialIcons } from "./../"
import Male from "./../../images/male.png"

export const Hero = () => (
  <Container id="about-me">
    <Flex>
      <Column1>
        <H1>Richard Taylor Dawson</H1>
        <P>I'm a software engineer based in Salt Lake City, UT specializing in building exceptional, high-quality websites and applications.</P>
        <SocialIcons />
      </Column1>
      <Column2>
        <img src={Male} alt="test"/>
      </Column2>
    </Flex>
  </Container>
)

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
