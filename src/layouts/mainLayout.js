import React from "react"
import PropTypes from "prop-types"
import { GlobalTheme } from "./../components/theme/"
import { Header, Footer } from "./../components/"

export const MainLayout = ({ children }) => (
  <>
    <GlobalTheme />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
