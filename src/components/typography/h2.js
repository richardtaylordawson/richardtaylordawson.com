import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"
import { Divider } from "./../"

export const H2 = ({ children }) => {
  const [theme] = useTheme()

  return (
    <>
      <StyledH2 theme={theme}>{children}</StyledH2>
      <Divider />
    </>
  )
}

const StyledH2 = styled.h2`
  font-size: 35px;
  margin-bottom: 10px;
  color: ${props => props.theme.primary};
`
