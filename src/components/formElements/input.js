import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"

export const Input = ({ id, name }) => {
  const [theme] = useTheme()

  return <StyledInput theme={theme} name={name} id={id} required></StyledInput>
}

const StyledInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: 1px solid ${props => props.theme.inputBorderColor};
  color: ${props => props.theme.text};
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 20px;
  padding: 10px;
  display:table-cell;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.primaryRGBA};
  }
`
