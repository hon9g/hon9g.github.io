import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default ({slug, title, date, excerpt}) => (
  <Link
    to={slug}
    css={css`
        margin: 0 1em;
        text-decoration: none;
        color: inherit;
    `}
  >
    <h3
      css={css`
        margin: 0.3em 0;
        color: inherit;
      `}>
      <span css={css`color: #6c71c4;`}>{title}</span>
      <span
        css={css`
          display: none;
          float: right;  
          @media (min-width: 380px) {
            display: block;
          }  
        `}
      >
        {date}
      </span>
    </h3>
    <p
      css={css`
        margin: 0.3em 0;
        padding-left: 0.5em;
        text-overflow: ellipsis;
      `}
    >
      {excerpt}
    </p>
  </Link>
)
