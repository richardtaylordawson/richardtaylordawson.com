import React from "react"
import styled from "@emotion/styled"

export const Label = ({ children, forTarget }) => <StyledLabel htmlFor={forTarget}>{children}</StyledLabel>

const StyledLabel = styled.label`
  font-weight: 500;
  display: block;
  margin-bottom: 10px;
  color: var(--text);
`
