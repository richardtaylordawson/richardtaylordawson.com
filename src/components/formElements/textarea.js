import React from "react"
import styled from "@emotion/styled"
import { Colors } from "../"

export const Textarea = ({ id, name }) => (
  <StyledTextarea id={id} name={name}></StyledTextarea>
)

const StyledTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #DDDDDD;
  height: 100%;
  max-height: 300px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #18A0FB;
`
