import React from "react"
import styled from "@emotion/styled"
import { NavigationLogo } from "./navigationLogo"
import { NavigationLinks } from "./navigationLinks"
import { NavigationLink } from "./navigationLink"

export const Navigation = () => (
  <NavigationContainer>
    <NavigationLogo />
    <NavigationLinks>
      <NavigationLink to="about-me">About Me</NavigationLink>
      <NavigationLink to="contact">Contact</NavigationLink>
    </NavigationLinks>
  </NavigationContainer>
)

const NavigationContainer = styled.div`
  height: 60px;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.975rem;
  padding-right: 0.975rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
`
