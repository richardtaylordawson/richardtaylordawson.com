import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"
import { Divider } from "./../"

export const H1 = ({ children }) => {
  const [theme] = useTheme()

  return (
    <>
      <StyledH1 theme={theme}>{children}</StyledH1>
      <Divider />
    </>
  )
}

const StyledH1 = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
  color: ${props => props.theme.primary}
`

