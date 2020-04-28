import React from "react"
import { Global, css } from "@emotion/core"

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
    <Global styles={css`
      @media only screen and (max-width: 400) {
        .omit {
          display: none;
        }
      }
      th, td {
        text-align: center;
      }
      mark {
        padding: 0.2rem;
        background-color: #FFC300;
      }
    `}/>
    <div css={css`flex-grow: 3;`}>
      {children}
    </div>
    <div css={css`flex-grow: 1;`}>
      <Footer />
    </div>
    
  </div>
)