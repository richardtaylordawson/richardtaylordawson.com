import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Link } from "react-scroll"
import { useTheme } from "./../../../context/"
import { Breakpoints } from "./../../utils"

export const NavigationLink = ({ children, to }) => {
  const [theme] = useTheme()

  return (
    <StyledNavigationLink
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      theme={theme}
    >
      {children}
    </StyledNavigationLink>
  )
}

const StyledNavigationLink = styled(Link)`
  color: ${props => props.theme.primary};
  font-size: 18px;
  font-weight: 500;
  margin-left: 30px;
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;

  :hover, :focus { background-size: 100% 2px; }

  ${Breakpoints["medium-down"]} {
    margin-bottom: 30px;
    margin-left: 0;
  }
`

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}
