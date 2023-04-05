import React from "react"
import { Global, css } from "@emotion/core"
import { useMenu } from "../../context"

export const GlobalTheme = () => {
  const [menu] = useMenu()

  let blur

  if (menu) {
    blur = "main, footer { filter: blur(5px); }"
  }

  return (
    <Global
      styles={css`
        html {
          font-family: "Montserrat", sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        body {
          margin: 68px 0 0;
          padding: 0;

          --primary: #18a0fb;
          --primaryRGBA: rgba(24, 160, 251, 0.5);
          --heading3: #444;
          --text: #565656;
          --backgroundColor: #fff;
          --mobileMenuColor: #fff;
          --mobileMenuShadow: -5px 0 30px #bbb;
          --skillCardBackgroundColor: #efefef;
          --skillCardTitle: #555;
          --footerBackgroundColor: #efefef;
          --inputBorderColor: #cdcdcd;

          background-color: var(--backgroundColor);
        }

        body.dark {
          -webkit-font-smoothing: antialiased;

          --primary: #18a0fb;
          --primaryRGBA: rgba(24, 160, 251, 0.5);
          --heading3: #fff;
          --text: #969696;
          --backgroundColor: #333;
          --mobileMenuColor: #333;
          --mobileMenuShadow: -5px 0 30px #111;
          --skillCardBackgroundColor: #222;
          --skillCardTitle: #bbb;
          --footerBackgroundColor: #222;
          --inputBorderColor: #666;

          background-color: var(--backgroundColor);
        }

        * {
          box-sizing: border-box;
        }

        ${blur}
      `}
    />
  )
}
