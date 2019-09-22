import React from "react"
import PropTypes from "prop-types"
import { Header, Footer, GlobalTheme } from "./../components/"
import { MenuProvider, ThemeProvider } from "../context/"

export const MainLayout = ({ children }) => (
  <ThemeProvider>
    <MenuProvider>
      <GlobalTheme />
      <Header />
      <main>{children}</main>
      <Footer />
    </MenuProvider>
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
