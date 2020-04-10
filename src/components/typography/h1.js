import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Breakpoints } from "./../utils/"

export const H1 = ({ children, textAlign }) => <StyledH1 textAlign={textAlign}>{children}</StyledH1>

const StyledH1 = styled.h1`
  font-size: 35px;
  margin-left: -5px;
  margin-bottom: 0;
  margin-top: 0;
  color: var(--primary);
  text-align: ${props => props.textAlign ? props.textAlign : "left"};

  ${Breakpoints["medium-up"]} { font-size: 45px; }
  ${Breakpoints["large-up"]} { font-size: 60px; }
`

H1.propTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
}
