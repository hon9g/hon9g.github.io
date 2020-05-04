import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

const keywordColor = css`color: #cb4b16;`
const variableColor = css`color: #6c71c4;`
const stringColor = css`color: #d80; margin-left: .5em;`
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
          justify-content: center;
        `}
      >
      {
        data.site.siteMetadata.user.photo 
          ? <img
            css={css`
              margin: 0 .5em;
              min-height: 5rem;
              height: 7em;
              object-fit: cover;
            `}
            alt="my face"
            src={data.site.siteMetadata.user.photo}/>
          : ''
      }
      <div css={css`
          margin: auto .5em;
          color: inherit;
        `}
      >
        <h3
          css={css`
            margin:auto;
            width: content;
          `}
        >
          <span css={keywordColor}>{`const `}</span>
          <span css={variableColor}>{data.site.siteMetadata.user.name}</span>
          {` = {`}
          {userInfo.map((x, i) => (
              data.site.siteMetadata.user[x]
              ? <div
                key={i.toString()}
                css={css`
                  margin: .3em .5em
                `}
              >
                  {x}:
                  <br/>
                  <span css={stringColor}>
                    {data.site.siteMetadata.user[x]}
                  </span>,
                </div>
              : ''
          ))}
          {`}`}
        </h3>
      </div>
    </header>
  )}
/>)

