import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

export const Button = ({ children, block = false, href, target, button = false, fullWidth = false, ...props }) => {
  let buttonOrLink

  if (button) {
    buttonOrLink = <button>{children}</button>
  } else {
    buttonOrLink = <a href={href} target={target}>{children}</a>
  }

  return <ButtonContainer {...props} block={block} fullWidth={fullWidth}>{buttonOrLink}</ButtonContainer>
}

const ButtonContainer = styled.div`
  a, button {
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
    border: 1px solid var(--primary);
    color: var(--primary);
    ${props => props.fullWidth && "width: 100%;"}

    &:hover {
      background-color: var(--primary);
      color: white;
      transition: all 0.3s;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem var(--primaryRGBA);
    }
  }
`

Button.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
  href: PropTypes.string,
  button: PropTypes.bool,
}
