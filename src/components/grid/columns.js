import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Breakpoints } from "./../utils/"

export const Columns = ({ children, split, max }) => (
  <FlexContainer>
    {
      children.length
        ?
          children.map((child, index, children) => {
            console.log(max);
            let columnWidth
            if(max) {
              columnWidth = 100 / max
            } else {
              columnWidth = split ? split[index] : 100 / children.length
            }

            return (
              <Column key={index} columnWidth={columnWidth}>
                {child}
              </Column>
            )
          })
        : ""
    }
  </FlexContainer>
)

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${Breakpoints["medium-down"]} {
    flex-direction: column;
  }
`

const Column = styled.div`
  width: ${props => props.columnWidth}%;
  margin: "30px 0";
  height: 100%;

  ${Breakpoints["medium-down"]} {
    width: 100%;
  }
`

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  collapseMargin: PropTypes.bool,
  split: PropTypes.array
}
