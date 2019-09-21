import React from "react"
import styled from "@emotion/styled"

export const Button = ({ children }) => (
  <StyledButton>{children}</StyledButton>
)

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 47.5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 104%;
  font-size: 18px;
  background-color: white;
  border: 1px solid #18A0FB;
  color: #18A0FB;
`
