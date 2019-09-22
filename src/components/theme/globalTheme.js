import React from "react"
import { Global, css } from "@emotion/core"
import { Colors } from "./../"

export const GlobalTheme = () => (
  <Global
    styles={css`
      html {
        font-family: "Montserrat", sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        color: ${Colors.secondary};
      }

      body {
        margin: 68px 0 0;
        padding: 0;
      }
    `}
  />
)
