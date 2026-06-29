import React from "react"
import styled from "@emotion/styled"
import { Divider } from ".."

export const H2 = ({ children }) => (
  <HeadingContainer>
    <StyledH2>{children}</StyledH2>
    <Divider />
  </HeadingContainer>
)

const HeadingContainer = styled.div`
  padding: 0 15px;
`

const StyledH2 = styled.h2`
  font-size: 35px;
  margin-bottom: 10px;
  color: var(--primary);
`
