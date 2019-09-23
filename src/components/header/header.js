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
  width: 100%;
  z-index: 1;
  top: 0;
`
