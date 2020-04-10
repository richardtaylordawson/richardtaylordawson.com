import React from "react"
import styled from "@emotion/styled"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import PropTypes from "prop-types"
import { Breakpoints } from "./../../utils"

export const NavigationIcon = ({ src, alt, name }) => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <StyledNavigationIcon
        onClick={(e) => toggleTheme(e.target.name === "light" ? "dark" : "light")}
        src={src}
        alt={alt}
        tabIndex="1"
        name={name}
      />
    )}
  </ThemeToggler>
)

const StyledNavigationIcon = styled.img`
  margin-left: 30px;
  cursor: pointer;
  ${props => props.hidden && "display: none;"}

  ${Breakpoints["medium-down"]} { margin-left: 0; }
`

NavigationIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
