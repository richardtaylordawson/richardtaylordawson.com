import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useTheme } from "./../../context/"

export const H3 = ({ children }) => {
  const [theme] = useTheme()

  return <StyledH3 theme={theme}>{children}</StyledH3>
}

const StyledH3 = styled.h3`
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${props => props.theme.heading3};
`

H3.propTypes = {
  children: PropTypes.node.isRequired,
}

