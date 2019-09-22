import React from "react"
import styled from "@emotion/styled"
import { SocialIcons } from "./../"

export const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledP>© 2019 Richard Taylor Dawson</StyledP>
      <StyledP>Designed with F, Built with G, and love</StyledP>
    </Container>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background-color: #efefef;
`

const Container = styled.div`
  padding: 10px 0.975rem;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const StyledP = styled.p`
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 10px;
  color: rgb(150, 150, 150);
`

