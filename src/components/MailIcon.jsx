import React from "react"

export default ({size}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    width={`${size ? size + 0.2 : 1.2}em`}
    height={`${size ? size + 0.2 : 1.2}em`}
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
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="32"
    />
    <path
      fill="none"
      stroke="#626262"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M112 160l144 112l144-112"
    />
  </svg>
)
