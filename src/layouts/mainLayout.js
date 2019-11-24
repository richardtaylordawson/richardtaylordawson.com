import React from "react"
import PropTypes from "prop-types"
import { Header, Footer, GlobalTheme } from "./../components/"

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
