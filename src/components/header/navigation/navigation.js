import React from "react"
import styled from "@emotion/styled"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { NavigationHamburger, NavigationLinks, NavigationLink, NavigationIcon } from "./../../"
import SunIcon from "./icons/sun.svg"
import MoonIcon from "./icons/moon.svg"

export const Navigation = () => (
  <ThemeToggler>
    {({ theme }) => {
      let themeIcon

      if (theme === "light") {
        themeIcon = <NavigationIcon src={SunIcon} alt="sun icon" name="light" />
      } else {
        themeIcon = <NavigationIcon src={MoonIcon} alt="moon icon" name="dark" />
      }

      return (
        <NavigationContainer>
          <NavigationLinks>
            <NavigationLink to="about-me">About Me</NavigationLink>
            {/* <NavigationLink to="projects">Projects</NavigationLink> */}
            <NavigationLink to="contact">Contact</NavigationLink>
            {themeIcon}
          </NavigationLinks>
          <NavigationHamburger />
        </NavigationContainer>
      )
    }}
  </ThemeToggler>
)

const NavigationContainer = styled.nav`
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  justify-content: flex-end;
  background-color: var(--backgroundColor);
`
