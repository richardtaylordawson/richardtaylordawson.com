import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useMenu } from "./../../../context/"
import { Breakpoints } from "./../../theme/"

export const NavigationLinks = ({ children }) => {
  const [menu] = useMenu()

  return <StyledNavigationLinks menu={menu}>{children}</StyledNavigationLinks>
}

const StyledNavigationLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;

  ${Breakpoints["medium-down"]} {
    display: ${props => props.menu ? 'flex' : 'none'};
    background-color: rgb(250,250,250);
    height: 100vh;
    position: absolute;
    right: 0;
    top: 8px;
    padding: 100px 50px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
`

NavigationLinks.propTypes = {
  children: PropTypes.node.isRequired,
}
