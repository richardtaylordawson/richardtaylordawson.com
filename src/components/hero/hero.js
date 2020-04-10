import React from "react"
import styled from "@emotion/styled"
import { Container, H1, H3, P, SocialIcons, Button } from "./../"
import { Breakpoints } from "./../utils/"

export const Hero = () => (
  <Container id="about-me" fullHeight={true}>
    <Flex>
      <div>
        <H1 textAlign="center">Richard Taylor Dawson</H1>
        <H3 textAlign="center">Front End Developer</H3>
        <ConstrainedP>
          <P textAlign="center">I'm based in Salt Lake City, UT and specialize in building exceptional, high-quality websites and applications.</P>
        </ConstrainedP>
        <SocialIcons textAlign="center" />
        <ButtonContainer>
          <Button href="/RichardTaylorDawson.pdf" target="_blank" test="aad">Resume</Button>
        </ButtonContainer>
      </div>
    </Flex>
  </Container>
)

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const ConstrainedP = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 330px;

  ${Breakpoints["medium-up"]} { max-width: 470px; }
`

const ButtonContainer = styled.div`
  text-align: center;
`
