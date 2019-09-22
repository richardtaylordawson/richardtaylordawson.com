import React from "react"
import styled from "@emotion/styled"
import HamburgerMenu from "react-hamburger-menu"
import { useMenu, useTheme } from "./../../../context/"
import { Breakpoints } from "./../../theme/"

export const NavigationHamburger = () => {
  const [menu, setMenu] = useMenu()
  const [theme] = useTheme()

  return (
    <StyledHamburgerMenu>
      <HamburgerMenu
        isOpen={menu}
        menuClicked={() => setMenu(!menu)}
        width={30}
        height={22}
        strokeWidth={4}
        rotate={0}
        color={theme.primary}
        borderRadius={5}
        animationDuration={0.2}
      />
    </StyledHamburgerMenu>
  )
}

const StyledHamburgerMenu = styled.div`
  margin-top: 20px;
  cursor: pointer;

  ${Breakpoints["large-up"]} { display: none; }
`
