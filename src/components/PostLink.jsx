import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default ({slug, title, date, excerpt}) => (
  <Link
    to={slug}
    css={css`
        margin: 0 1rem;
        text-decoration: none;
        color: inherit;
    `}
  >
    <h2
      css={css`
        margin: 0.5rem 0;
        font-size: 1rem;
        color: inherit;
      `}>
      <span css={css`color: #6c71c4;`}>{title}</span>
      <span
        css={css`
          float: right;  
          @media (max-width: 400px) {
            background: black;
            display: none;
          }  
        `}
      >
        {date}
      </span>
    </h2>
    <p
      css={css`
        padding-left: 1rem;
        height: 1rem;
        text-overflow: ellipsis;
      `}
    >
      {excerpt}
    </p>
  </Link>
)
