import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "../../../context/"

export const Topbar = () => {
  const [theme] = useTheme()

  return <TopbarContainer theme={theme}></TopbarContainer>
}

const TopbarContainer = styled.div`
  height: 8px;
  background-color: ${props => props.theme.primary};
`
