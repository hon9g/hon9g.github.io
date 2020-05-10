import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import GitIcon from "./GitIcon"
import MailIcon from "./MailIcon"


const userInfo = ['role', 'location'];
const keywordColor = css`color: #cb4b16;`
const variableColor = css`color: #6c71c4;`
const stringColor = css`color: #d80; margin-left: .5em;`
const userContact = ['github', 'email']
const icon = new Map([['github', <GitIcon />], ['email', <MailIcon />]])
const prefix = new Map([['github', 'https://github.com/'], ['email', 'mailto:']])

const buttonStyle = css`
  margin: .5em 0.3em;
  display: inline-block;
  height 1em;
  background-image: none;
`

export default () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            user {
              email
              github
              name
              photo
              role
              location
            }
          }
        }
      }
  `}
    render={({site: {siteMetadata: {user}}}) => (
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div>
        {
          user.photo 
            ? <img
              css={css`
                margin: 0;
                margin-top: 2em;
                min-height: 5rem;
                height: 8em;
                object-fit: cover;
              `}
              alt="my face"
              src={user.photo}/>
            : ''
        }
        <div
          css={css`
            text-align: center;
          `}
        >
          {userContact.filter(e => user[e]).map((e, i) => (
            <a key={i} href={`${prefix.get(e)}${user[e]}`} target="_blank" rel="noopener noreferrer" css={buttonStyle}>
              <span role="img" aria-label={`${e} icon`}>{icon.get(e)}</span>
            </a>
          ))}
        </div>
        </div>
      <div css={css`
          margin: auto .5em;
          color: inherit;
        `}
      >
        <h3
          css={css`
            margin: 0 auto;
            width: content;
            color: inherit;
          `}
        >
          <span css={keywordColor}>{`const `}</span>
          <span css={variableColor}>{user.name}</span>
          {` = {`}
          {userInfo.map((x, i) => (
              user[x]
              ? <div
                key={i.toString()}
                css={css`
                  margin: .3em .5em;
                `}
              >
                  {x}:
                  <br/>
                  <span css={stringColor}>
                    {user[x]}
                  </span>,
                </div>
              : ''
          ))}
          <span
            css={css`
              margin-left: .3em;
            `}
          >
            {`}`}
          </span>
        </h3>
      </div>
    </div>
  )}
/>)

