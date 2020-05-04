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
        display:flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: 100%;
      `}
    >
      <About />
      <div css={css`
          color: #4c4b56
        `}
      >
        <h3 css={css`
            margin: 0;
            color: inherit;
            max-width: 100%
          `}
        >
          {`/** ${data.allMarkdownRemark.totalCount} posts`}
        </h3>
        <div css={css`
            margin: 0 auto;
            width: 90%;
            min-height: 30vh;
            word-wrap: break-word;
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
        <h3 css={css`
            margin: 0;
            color: inherit;
          `}
        >
        {` */`}
        </h3>
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
          excerpt(pruneLength: 70)
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
    }
  }
}
`