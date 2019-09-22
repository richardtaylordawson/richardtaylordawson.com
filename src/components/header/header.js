import React from "react"
import styled from "@emotion/styled"
import { Topbar, Navigation } from "./../"

export const Header = () => (
  <StyledHeader>
    <Topbar />
    <Navigation />
  </StyledHeader>
)

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`
