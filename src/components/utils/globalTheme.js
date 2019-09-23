import React from "react"
import { Global, css } from "@emotion/core"
import { useTheme, useMenu } from "./../../context/"

export const GlobalTheme = () => {
  const [theme] = useTheme()
  const [menu] = useMenu()

  let blur;
  if(menu) {
    blur = "main, footer { filter: blur(5px); }"
  }

  return (
    <Global
      styles={css`
        html {
          font-family: "Montserrat", sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          background-color: ${theme.backgroundColor};
        }

        body {
          margin: 68px 0 0;
          padding: 0;
        }

        ${blur}
      `}
    />
  )
}
