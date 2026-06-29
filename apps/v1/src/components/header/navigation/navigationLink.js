import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Link } from "react-scroll"
import { Breakpoints } from "../../utils"

export const NavigationLink = ({ children, to }) => (
  <li>
    <StyledNavigationLink
      activeClass="active"
      to={to}
      offset={-68}
      spy={true}
      smooth={true}
      duration={800}
      tabIndex="1"
    >
      {children}
    </StyledNavigationLink>
  </li>
)

const StyledNavigationLink = styled(Link)`
  color: var(--primary);
  font-size: 18px;
  font-weight: 500;
  margin-left: 30px;
  cursor: pointer;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  :hover,
  :focus {
    background-size: 100% 2px;
  }

  ${Breakpoints["medium-down"]} {
    margin-bottom: 30px;
    margin-left: 0;
    display: inline-block;
  }
`

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}
