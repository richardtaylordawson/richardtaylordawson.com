import React from "react"
import PropTypes from "prop-types"
import { contextWrapper } from "./contextWrapper"
import { Header, Footer, GlobalTheme } from "./../components/"

export const MainLayout = ({ children }) => (
  <contextWrapper>
    <GlobalTheme />
    <Header />
    <main>{children}</main>
    <Footer />
  </contextWrapper>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
