import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Breakpoints } from "../utils"

export const Columns = ({ children, sm, md, lg }) => (
  <FlexContainer>
    {children.length
      ? children.map((child, index) => {
          let smColumnWidth
          let mdColumnWidth
          let lgColumnWidth

          if (sm || md || lg) {
            smColumnWidth = 100 / sm
            mdColumnWidth = 100 / md
            lgColumnWidth = 100 / lg
          }

          return (
            <Column
              key={index}
              smColumnWidth={smColumnWidth}
              mdColumnWidth={mdColumnWidth}
              lgColumnWidth={lgColumnWidth}
            >
              {child}
            </Column>
          )
        })
      : ""}
  </FlexContainer>
)

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Column = styled.div`
  height: 100%;
  padding: 0 15px;

  ${Breakpoints["small-up"]} {
    ${(props) => props.smColumnWidth && `width: ${props.smColumnWidth}%;`}
  }

  ${Breakpoints["medium-up"]} {
    ${(props) => props.mdColumnWidth && `width: ${props.mdColumnWidth}%;`}
  }

  ${Breakpoints["large-up"]} {
    ${(props) => props.lgColumnWidth && `width: ${props.lgColumnWidth}%;`}
  }
`

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  sm: PropTypes.number.isRequired,
  md: PropTypes.number.isRequired,
  lg: PropTypes.number.isRequired,
}
