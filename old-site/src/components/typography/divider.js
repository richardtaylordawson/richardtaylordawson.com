import React from "react"
import styled from "@emotion/styled"

export const Divider = ({ children }) => <StyledDivider>{children}</StyledDivider>

const StyledDivider = styled.div`
  width: 50px;
  height: 5px;
  margin-bottom: 30px;
  background-color: var(--primary);
`

