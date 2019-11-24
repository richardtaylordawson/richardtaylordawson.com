import React from "react"
import styled from "@emotion/styled"
import HamburgerMenu from "react-hamburger-menu"
import { useMenu } from "./../../../context/"
import { Breakpoints } from "./../../utils"

export const NavigationHamburger = () => {
  const [menu, setMenu] = useMenu()
  let hamburgerColor

  if (typeof document !== undefined && typeof getComputedStyle !== undefined && typeof getPropertyValue !== undefined) {
    hamburgerColor = getComputedStyle(document.body).getPropertyValue('--primary')
  }

  return (
    <StyledHamburgerMenu>
      <HamburgerMenu
        isOpen={menu}
        menuClicked={() => setMenu(!menu)}
        width={30}
        height={22}
        strokeWidth={4}
        color={hamburgerColor}
        rotate={0}
        borderRadius={5}
        animationDuration={0.2}
      />
    </StyledHamburgerMenu>
  )
}

const StyledHamburgerMenu = styled.div`
  margin-top: 20px;
  cursor: pointer;
  z-index: 2;
  span { background-color: orange; }

  ${Breakpoints["large-up"]} { display: none; }
`
