import React from "react"
import styled from "@emotion/styled"

export const Input = ({ id, name }) => (
  <StyledInput name={name} id={id}></StyledInput>
)

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #DDDDDD;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 20px;
  padding: 10px;
  color: #18A0FB;
`
