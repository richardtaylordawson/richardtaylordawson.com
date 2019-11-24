import React from "react"
import PropTypes from "prop-types"
import { MenuProvider, ThemeProvider } from "../context/"

export const contextWrapper = ({ children }) => (
  <ThemeProvider>
    <MenuProvider>
      {children}
    </MenuProvider>
  </ThemeProvider>
)

contextWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
