import React from "react"
import styled from "@emotion/styled"
import { SocialIcons } from "./../"

export const Footer = () => (
  <StyledFooter>
    <StyledP>© 2019 Richard Taylor Dawson</StyledP>
    <div>
      <SocialIcons />
    </div>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  height: 50px;
  background-color: #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.975rem;
  padding-right: 0.975rem;
`

const StyledP = styled.p`
  font-size: 12px;
  color: rgb(150, 150, 150);
`

