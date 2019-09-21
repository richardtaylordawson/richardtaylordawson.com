import React from "react"
import styled from "@emotion/styled"

export const Label = ({ children, forTarget }) => (
  <StyledLabel htmlFor={forTarget}>{children}</StyledLabel>
)

const StyledLabel = styled.label`
  margin-bottom: 20px;
`
