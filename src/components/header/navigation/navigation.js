import React, { useState } from "react"
import styled from "@emotion/styled"
import HamburgerMenu from "react-hamburger-menu"
import { NavigationLogo, NavigationLinks, NavigationLink, NavigationIcon } from "./../../"
import { Breakpoints, Colors } from "./../../theme/"
import SunIcon from "./icons/sun.svg"

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <NavigationContainer>
      <NavigationLogo />
      <NavigationLinks menuOpen={menuOpen}>
        <NavigationLink to="about-me">About Me</NavigationLink>
        <NavigationLink to="contact">Contact</NavigationLink>
        <NavigationIcon src={SunIcon} alt="sun icon" />
      </NavigationLinks>
      <StyledHamburgerMenu>
        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={() => setMenuOpen(!menuOpen)}
          width={30}
          height={22}
          strokeWidth={4}
          rotate={0}
          color={Colors.primary}
          borderRadius={5}
          animationDuration={0.2}
        />
      </StyledHamburgerMenu>
    </NavigationContainer>
  )
}

const NavigationContainer = styled.div`
  height: 60px;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
`

const StyledHamburgerMenu = styled.div`
  margin-top: 20px;
  cursor: pointer;

  ${Breakpoints["large-up"]} {
    display: none;
  }
`
