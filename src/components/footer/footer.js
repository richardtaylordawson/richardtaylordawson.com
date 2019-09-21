import React from "react"
import styled from "@emotion/styled"
import { SocialIcons } from "./../"

export const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledP>© 2019 Richard Taylor Dawson</StyledP>
      <div>
        <SocialIcons />
      </div>
    </Container>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background-color: #efefef;
`

const Container = styled.div`
  height: 50px;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.975rem;
  padding-right: 0.975rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledP = styled.p`
  font-size: 12px;
  color: rgb(150, 150, 150);
`

