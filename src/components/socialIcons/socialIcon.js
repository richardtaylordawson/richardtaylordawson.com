import React from "react"
import styled from "@emotion/styled"

export const SocialIcon = ({ href, target, src, alt }) => (
  <Link href={href} target={target}>
    <img src={src} alt={alt} />
  </Link>
)

const Link = styled.a`
  margin-right: 20px;
  cursor: pointer;
`
