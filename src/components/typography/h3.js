import React from "react"
import styled from "@emotion/styled"
import { Colors } from "./../theme/"

export const H3 = ({ children }) => (
  <StyledH3>{children}</StyledH3>
)

const StyledH3 = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
  color: ${Colors.dark};
`

