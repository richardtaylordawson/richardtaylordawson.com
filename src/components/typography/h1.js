import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"

export const H1 = ({ children }) => {
  const [theme] = useTheme()

  return <StyledH1 theme={theme}>{children}</StyledH1>
}

const StyledH1 = styled.h1`
  font-size: 60px;
  margin-left: -5px;
  margin-bottom: 0;
  margin-top: 0;
  color: ${props => props.theme.primary}
`

