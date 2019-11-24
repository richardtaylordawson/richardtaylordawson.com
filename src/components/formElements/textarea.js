import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../context/"

export const Textarea = ({ id, name }) => {
  const [theme] = useTheme()

  return <StyledTextarea theme={theme} id={id} name={name} required></StyledTextarea>
}

const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  margin-bottom: 15px;
  border: 1px solid ${props => props.theme.inputBorderColor};
  color: ${props => props.theme.text};
  height: 150px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
  resize: none;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.primaryRGBA};
  }
`
