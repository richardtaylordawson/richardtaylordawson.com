import React from "react"
import styled from "@emotion/styled"

export const Footer = () => (
  <Container>
    <StyledP>© {new Date().getFullYear()} Richard Taylor Dawson</StyledP>
  </Container>
)

const Container = styled.footer`
  background-color: var(--footerBackgroundColor);
  padding: 20px 0.975rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const StyledP = styled.p`
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 0;
  color: var(--text);
`

