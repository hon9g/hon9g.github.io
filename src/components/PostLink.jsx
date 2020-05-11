import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default ({slug, title, excerpt}) => (
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
      {title}
    </h3>
    <p
      css={css`
        margin: 0.3em 0;
        padding: 0 0.5em;
        white-space: no-wrap;
        word-break: break-all;
      `}
    >
      {excerpt}
    </p>
  </Link>
)
