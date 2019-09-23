import React from "react"
import styled from "@emotion/styled"
import { Container, H1, H3, P, SocialIcons, Button } from "./../"

export const Hero = () => (
  <Container id="about-me" fullHeight={true}>
    <Flex>
      <Column>
        <H1>Richard Taylor Dawson</H1>
        <H3>Front End Developer</H3>
        <P>I'm a software engineer based in Salt Lake City, UT specializing in building exceptional, high-quality websites and applications.</P>
        <SocialIcons />
        <Button>Resume</Button>
      </Column>
    </Flex>
  </Container>
)

const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const Column = styled.div`
  width: 100%;
`
