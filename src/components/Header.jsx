import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import HomeIcon from "./HomeIcon"

export default () => (
  <StaticQuery
    query={graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `}
    render={({ site: { siteMetadata: { title }}}) => (
      <>
        <header
          css={css`
            display: flex;
            margin: 0;
            padding: 0.2em;
            width: 100%;
            height: 3em;
            background-color: black;
            text-aligh: center;
          `}
        >
          <Link
            to={'/'}
            css={css`
              margin: auto auto;
              position: relative;
              left: -.3em;
              color: #ccc;
              text-shadow: none;
              background-image: none;
            `}
          >
            <HomeIcon />
            <span
              css={css`
                ${title ? 'margin-left: .2em;' : ''}
              `}
            >
              {title}
            </span>
          </Link>
        </header>
        <Link
          to={'/'}
          css={css`
            position: fixed;
            top: 0;
            height: 1rem;
            width: 100%;
            background-color: black;
            background-image: none;
          `}
        />
      </>
    )}
  />
)