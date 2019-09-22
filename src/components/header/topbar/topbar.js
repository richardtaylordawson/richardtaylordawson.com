import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "../../../context/theme/"

export const Topbar = () => {
  const [theme] = useTheme()

  return <TopbarContainer theme={theme}></TopbarContainer>
}

const TopbarContainer = styled.div`
  background-color: ${props => props.theme.primary};
  height: 8px;
`
