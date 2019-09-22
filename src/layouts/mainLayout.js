import React from "react"
import PropTypes from "prop-types"
import { Header, Footer, GlobalTheme } from "./../components/"
import { ThemeProvider } from "../context/theme/"

export const MainLayout = ({ children }) => (
  <ThemeProvider>
    <GlobalTheme />
    <Header />
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
