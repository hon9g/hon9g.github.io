import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

const keywordColor = css`color: #cb4b16;`
const variableColor = css`color: #6c71c4;`
const stringColor = css`color: #d80;`
const userInfo = ['role', 'location'];

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            user {
              name
              photo
              role
              location
            }
          }
        }
      }
  `}
    render={data => (
      <header
        css={css`
          display: flex;
          max-height: 25vh;
          justify-content: center;
        `}
      >
      {
        data.site.siteMetadata.user.photo 
          ? <img
            css={css`
              margin: 0.5rem;
              max-width: 30vw;
              max-height: 9rem;
              object-fit: cover;
            `}
            alt="my face"
            src={data.site.siteMetadata.user.photo}/>
          : ''
      }
      <div css={css`margin: auto 0.2rem; color: inherit;`}>
        <h1
          css={css`
            margin:auto;
            font-size: 1rem;
          `}
        >
          <span css={keywordColor}>{`const `}</span>
          <span css={variableColor}>{data.site.siteMetadata.user.name}</span>
            {` = {`}
            {userInfo.map((x, i) => (
                data.site.siteMetadata.user[x]
                ? <div key={i.toString()} css={css`margin: 0.2rem 1rem`}>
                    {x}: <span css={stringColor}>{data.site.siteMetadata.user[x]}</span>,
                  </div>
                : ''
            ))}
            {`}`}
        </h1>
      </div>
    </header>
  )}
/>)

