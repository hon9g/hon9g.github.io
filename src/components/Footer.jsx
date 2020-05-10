import React from "react"
import { css, keyframes } from "@emotion/core"
import { Link } from "gatsby"

import HomeIcon from "./HomeIcon"

const fadeIn = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  1% {
    max-height: .1em;
    opacity: 0;
  }
  100% {
    max-height: 1em;
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-50%);
  }
`

const buttonStyle = css`
  margin: .5em 0;
  display: block;
  height 1em;
  color: #4c4b56;
  font-weight: bold;
  background-image: none;
  div {
    margin-top: -.5em;
    max-height: 0;
    overflow: hidden;
  }
  :hover div {
    animation: ${fadeIn} 1s ease;
  }
  :hover, :active {
    animation: ${slideIn} 1s ease;
  }
`

export default () => (
  <footer
    css={css`
      width: 100%;
      text-align: center;
    `}
  >
    <Link to={'/'} css={buttonStyle}>
        <HomeIcon />
        <div>home</div>
    </Link>
  </footer>
)