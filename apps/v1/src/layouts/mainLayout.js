import React from "react"
import PropTypes from "prop-types"
import { Header, Footer, GlobalTheme } from "../components"
import { MenuProvider } from "../context"

export const MainLayout = ({ children }) => (
  <MenuProvider>
    <GlobalTheme />
    <Header />
    <main>{children}</main>
    <Footer />
  </MenuProvider>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
