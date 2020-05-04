import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/Layout"

export default ({data}) => {
  const post = data.markdownRemark
  return (
    <Layout>
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
        `}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
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