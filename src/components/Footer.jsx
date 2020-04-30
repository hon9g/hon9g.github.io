import React from "react"
import { css, keyframes } from "@emotion/core"
import { Link, StaticQuery, graphql } from "gatsby"

import GitIcon from "./GitIcon"
import HomeIcon from "./HomeIcon"
import MailIcon from "./MailIcon"

const userInfo = ['github', 'email']
const icon = new Map([['home', <HomeIcon />], ['github', <GitIcon />], ['email', <MailIcon />]])
const prefix = new Map([['github', 'https://github.com/'], ['email', 'mailto:']])

const fadeIn = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  1% {
    max-height: 0.1rem;
    opacity: 0;
  }
  100% {
    max-height: 1.3rem;
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
  margin: 0.5rem 0;
  display: block;
  height 2rem;
  color: #4c4b56;
  font-weight: bold;
  background-image: none;
  div {
    margin-top: -0.3rem;
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
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            user {
              email
              github
            }
          }
        }
      }
    `}
    render={({site: {siteMetadata: {user}}}) => (
        <footer
          css={css`
            width: 100%;
            text-align: center;
          `}
        > 
          <div
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <Link to={'/'} css={buttonStyle}>
                <span role="img" aria-label="home icon">{icon.get('home')}</span>
                <div>home</div>
            </Link>
            {userInfo.filter(e => user[e]).map((e, i) => (
              <a key={i} href={`${prefix.get(e)}${user[e]}`} target="_blank" rel="noopener noreferrer" css={buttonStyle}>
                <span role="img" aria-label={`${e} icon`}>{icon.get(e)}</span>
                <div>{e}</div>
              </a>
            ))}
          </div>
        </footer>
    )}
  />
)