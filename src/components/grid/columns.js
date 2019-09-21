import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

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
`

const Column = styled.div`
  width: ${props => props.columnWidth}%;
  margin: "30px 0";
`

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  collapseMargin: PropTypes.bool,
  split: PropTypes.array
}
