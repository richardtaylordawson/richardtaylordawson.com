import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Breakpoints } from "./../utils/"

export const P = ({ children, textAlign }) => <StyledP textAlign={textAlign}>{children}</StyledP>

const StyledP = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto 15px;
  color: var(--text);
  text-align: ${props => props.textAlign ? props.textAlign : "left"};

  ${Breakpoints["medium-up"]} { font-size: 18px; }
  ${Breakpoints["large-up"]} { font-size: 20px; }
`

P.propTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
}
