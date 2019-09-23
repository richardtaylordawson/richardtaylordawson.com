import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const Container = ({ children, id, fullHeight = false }) => (
  <StyledContainer id={id} fullHeight={fullHeight}>{children}</StyledContainer>
)

const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 60px 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.975rem;
  padding-right: 0.975rem;
  ${props => props.fullHeight && "height: calc(100vh - 68px); box-sizing: border-box; padding-top: 0;"}
`

Container.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  fullHeight: PropTypes.bool,
}
