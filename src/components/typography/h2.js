import React from "react"
import styled from "@emotion/styled"
import { Divider } from "./"

export const H2 = ({ children }) => (
  <>
    <StyledH2>{children}</StyledH2>
    <Divider />
  </>
)

const StyledH2 = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  color: #18A0FB;
`
