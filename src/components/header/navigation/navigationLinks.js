import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useMenu, useTheme } from "./../../../context/"
import { Breakpoints } from "./../../utils"

export const NavigationLinks = ({ children }) => {
  const [theme] = useTheme()
  const [menu] = useMenu()

  return <StyledNavigationLinks theme={theme} menu={menu}>{children}</StyledNavigationLinks>
}

const StyledNavigationLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  visibility: visible;
  justify-content: flex-end;
  align-items: center;

  ${Breakpoints["medium-down"]} {
    visibility: ${props => props.menu ? "visible" : "hidden"};
    transform: ${props => props.menu ? "translateX(0vw)" : "translateX(100vw)"};
    background-color: ${props => props.theme.mobileMenuColor};
    transition: ${props => props.menu && "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s"};
    box-shadow: ${props => props.theme.mobileMenuShadow};
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    width: 160px;
    padding: 100px 50px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`

NavigationLinks.propTypes = {
  children: PropTypes.node.isRequired,
}
