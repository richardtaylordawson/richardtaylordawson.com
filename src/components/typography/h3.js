import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"
import { Divider } from "./../"

export const H3 = ({ children }) => {
  const [theme] = useTheme()

  return (
    <>
      <StyledH3 theme={theme}>{children}</StyledH3>
      <Divider />
    </>
  )
}

const StyledH3 = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
  color: ${props => props.theme.dark};
`

