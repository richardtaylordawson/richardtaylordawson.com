import React from "react"
import styled from "@emotion/styled"
import { SocialIcon } from "./../"
import CodeWars from "./icons/codewars.svg"
import Github from "./icons/github.svg"
import Instagram from "./icons/instagram.svg"
import LinkedIn from "./icons/linkedin.svg"
import Twitter from "./icons/twitter.svg"

export const SocialIcons = () => (
  <SocialIconsContainer>
    <SocialIcon
      href="https://github.com/richardtaylordawson"
      target="_blank"
      src={Github}
      alt="github logo"
    />
    <SocialIcon
      href="https://www.linkedin.com/in/richard-dawson-482927123/"
      target="_blank"
      src={LinkedIn}
      alt="linked in logo"
    />
    <SocialIcon
      href="https://twitter.com/richard_codes"
      target="_blank"
      src={Twitter}
      alt="twitter logo"
    />
    <SocialIcon
      href="https://www.codewars.com/users/richardtaylordawson"
      target="_blank"
      src={CodeWars}
      alt="codewars logo"
    />
    <SocialIcon
      href="https://www.instagram.com/rtdaws003/"
      target="_blank"
      src={Instagram}
      alt="instagram logo"
    />
  </SocialIconsContainer>
)

const SocialIconsContainer = styled.div`
  margin-bottom: 30px;
`
