import React from "react"
import styled from "@emotion/styled"
import { useTheme } from "./../../../context/"
import { NavigationHamburger, NavigationLinks, NavigationLink, NavigationIcon } from "./../../"
import SunIcon from "./icons/sun.svg"
import MoonIcon from "./icons/moon.svg"

export const Navigation = () => {
  const [theme] = useTheme()
  let themeIcon;

  if (theme.key === "light") {
    themeIcon = <NavigationIcon src={SunIcon} alt="sun icon" />
  } else {
    themeIcon = <NavigationIcon src={MoonIcon} alt="moon icon" />
  }

  return (
    <NavigationContainer theme={theme}>
      <NavigationLinks>
        <NavigationLink to="about-me">About Me</NavigationLink>
        {/* <NavigationLink to="projects">Projects</NavigationLink> */}
        <NavigationLink to="contact">Contact</NavigationLink>
        {themeIcon}
      </NavigationLinks>
      <NavigationHamburger />
    </NavigationContainer>
  )
}

const NavigationContainer = styled.nav`
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  justify-content: flex-end;
  background-color: ${props => props.theme.backgroundColor};
`
