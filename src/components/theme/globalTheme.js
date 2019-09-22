import React from "react"
import { Global, css } from "@emotion/core"
import { useTheme } from "./../../context/"

export const GlobalTheme = () => {
  const [theme] = useTheme()

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
      `}
    />
  )
}
