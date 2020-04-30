import React from "react"
import { css } from "@emotion/core"

export default () => {
  const style = css`
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  `
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      focusable="false"
      width="1rem"
      height="1rem"
      style={style}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512 512"
    >
      <rect
        x="48" 
        y="96" 
        width="416" 
        height="320" 
        rx="40" 
        ry="40" 
        fill="none" 
        stroke="#626262" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="32"
      />
      <path
        fill="none"
        stroke="#626262"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M112 160l144 112l144-112"
      />
    </svg>
  )
}