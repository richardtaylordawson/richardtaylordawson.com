import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const Container = ({ children, id }) => (
  <StyledContainer id={id}>{children}</StyledContainer>
)

const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 60px 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.975rem;
  padding-right: 0.975rem;
`

Container.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
}
