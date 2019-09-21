import React from "react"
import styled from "@emotion/styled"
import { Colors } from "./../theme/"

export const P = ({ children }) => (
  <StyledP>{children}</StyledP>
)

const StyledP = styled.p`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 30px;
  color: ${Colors.dark};
`

