import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

export const NavigationLinks = ({ children }) => (
  <StyledNavigationLinks>{children}</StyledNavigationLinks>
)

const StyledNavigationLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
`

NavigationLinks.propTypes = {
  children: PropTypes.node.isRequired,
}
