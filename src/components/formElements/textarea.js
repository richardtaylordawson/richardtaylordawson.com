import React from "react"
import styled from "@emotion/styled"

export const Textarea = ({ id, name }) => <StyledTextarea id={id} name={name} required></StyledTextarea>

const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  margin-bottom: 15px;
  border: 1px solid var(--inputBorderColor);
  color: var(--text);
  height: 150px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
  resize: none;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem var(--primaryRGBA);
  }
`
