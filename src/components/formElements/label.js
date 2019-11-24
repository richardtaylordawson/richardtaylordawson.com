import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"

export const Label = ({ children, forTarget }) => {
  const [theme] = useTheme()

  return <StyledLabel theme={theme} htmlFor={forTarget}>{children}</StyledLabel>
}

const StyledLabel = styled.label`
  font-weight: 500;
  display: block;
  margin-bottom: 10px;
  color: ${props => props.theme.text};
`
