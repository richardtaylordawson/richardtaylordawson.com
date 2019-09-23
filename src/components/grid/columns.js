import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Breakpoints } from "./../utils/"

export const Columns = ({ children, split }) => (
  <FlexContainer>
    {
      children.map((child, index, children) => (
        <Column key={index} columnWidth={split ? split[index] : 100 / children.length}>
          {child}
        </Column>
      ))
    }
  </FlexContainer>
)

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${Breakpoints["medium-down"]} {
    flex-direction: column;
  }
`

const Column = styled.div`
  width: ${props => props.columnWidth}%;
  margin: "30px 0";

  ${Breakpoints["medium-down"]} {
    width: 100%;
  }
`

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  collapseMargin: PropTypes.bool,
  split: PropTypes.array
}
