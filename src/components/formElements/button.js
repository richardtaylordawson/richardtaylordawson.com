import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useTheme } from "./../../context/"

export const Button = ({ children, block = false }) => {
  const [theme] = useTheme()

  return <StyledButton theme={theme} block={block}>{children}</StyledButton>
}

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 47.5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 18px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};

  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transition: all 0.3s;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.primaryRGBA};
  }
`

Button.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
}
