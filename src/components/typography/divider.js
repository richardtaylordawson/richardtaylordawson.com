import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/theme/"

export const Divider = ({ children }) => {
  const [theme] = useTheme()

  return <StyledDivider theme={theme}>{children}</StyledDivider>
}

const StyledDivider = styled.div`
  width: 50px;
  height: 5px;
  margin-bottom: 30px;
  background-color: ${props => props.theme.primary};
`

