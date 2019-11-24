import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useTheme } from "./../../context/"
import { Breakpoints } from "./../utils/"

export const H3 = ({ children, textAlign }) => {
  const [theme] = useTheme()

  return (
    <StyledH3
      theme={theme}
      textAlign={textAlign}
    >
      {children}
    </StyledH3>
  )
}

const StyledH3 = styled.h3`
  font-size: 25px;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${props => props.theme.heading3};
  text-align: ${props => props.textAlign ? props.textAlign : "left"};

  ${Breakpoints["medium-up"]} { font-size: 28px; }
  ${Breakpoints["large-up"]} { font-size: 33px; }
`

H3.propTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
}
