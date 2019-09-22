import React from "react"
import styled from "@emotion/styled"
import { Divider, Colors } from "./../"

export const H1 = ({ children }) => (
  <>
    <StyledH1>{children}</StyledH1>
    <Divider />
  </>
)

const StyledH1 = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
  color: ${Colors.primary}
`

