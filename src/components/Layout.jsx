import React from "react"
import { css } from "@emotion/core"

import Footer from './Footer'

export default ({children}) => (
  <div
    css={css`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 100vh;
        max-width: 700px;
        padding: 1.5rem 1rem 1rem 1rem;
        color: #4c4b56;
    `}
  >
    <div css={css`flex-grow: 3;`}>
      {children}
    </div>
    <div css={css`flex-grow: 1;`}>
      <Footer />
    </div>
  </div>
)