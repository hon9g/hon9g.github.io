import React from "react"
import { css } from "@emotion/core"

import Header from "./Header"

export default ({children}) => (
  <div
    css={css`
        margin: 0;
        height: 100vh;
    `}
  >
    <Header />
    <div
      css={css`
        margin: 0 auto;
        padding: 0 1em;
        max-width: 700px;
        color: #4c4b56;
      `}
    >
      {children}
    </div>
  </div>
)