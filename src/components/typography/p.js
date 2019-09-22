import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"

export const P = ({ children }) => {
  const [theme] = useTheme()

  return <StyledP theme={theme}>{children}</StyledP>
}

const StyledP = styled.p`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 30px;
  color: ${props => props.theme.dark};
`

