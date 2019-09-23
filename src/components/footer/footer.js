import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"

export const Footer = () => {
  const [theme] = useTheme()

  return (
    <Container theme={theme}>
      <StyledP theme={theme}>© 2019 Richard Taylor Dawson</StyledP>
    </Container>
  )
}

const Container = styled.footer`
  background-color: ${props => props.theme.footerBackgroundColor};
  padding: 20px 0.975rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const StyledP = styled.p`
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.text};
`

