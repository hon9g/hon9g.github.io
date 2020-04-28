import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"

export default ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        css={css`
        display:flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: 100%;
        `}
      >
        <h1 css={css`
          margin: 0;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <div
          css={css`
            margin: 0;
            padding: 0 1rem;
            max-height: 70vh;
            overflow-y: scroll;
          `}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query mdBlogPost ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`