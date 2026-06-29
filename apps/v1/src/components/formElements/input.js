import React from "react"
import styled from "@emotion/styled"

export const Input = ({ id, name }) => <StyledInput name={name} id={id} required />

const StyledInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: 1px solid var(--inputBorderColor);
  color: var(--text);
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 20px;
  padding: 10px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem var(--primaryRGBA);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 1px solid var(--inputBorderColor);
    -webkit-text-fill-color: var(--text);
    transition: background-color 5000s ease-in-out 0s;
  }
`
