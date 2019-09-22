import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

export const NavigationIcon = ({ src, alt }) => (
  <StyledNavigationIcon src={src} alt={alt} />
)

const StyledNavigationIcon = styled.img`
  margin-left: 30px;
  cursor: pointer;
`

NavigationIcon.propTypes = {
  src: PropTypes.symbol.isRequired,
  alt: PropTypes.string.isRequired
}
