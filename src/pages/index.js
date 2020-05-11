import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import About from "../components/About"
import Layout from "../components/Layout"
import PostLink from "../components/PostLink"


export default ({ data }) => (
  <Layout>
    <div
      css={css`
        min-height: 100%;
      `}
    >
      <About />
      <div css={css`
          color: #4c4b56
        `}
      >
        <div css={css`
            margin: .5em auto;
          `}
        >
          {data.allMarkdownRemark.edges.map(({node}) => (
            <PostLink
              key = {node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
query {
  allMarkdownRemark(sort: {
    fields : [frontmatter___date],
    order: DESC
  }) {
    totalCount
    edges {
        node {
          id
          excerpt(pruneLength: 130)
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
    }
  }
}
`