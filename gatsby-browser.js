/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { MenuProvider, ThemeProvider } from "./src/context/"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MenuProvider>
      {element}
    </MenuProvider>
  </ThemeProvider>
)
