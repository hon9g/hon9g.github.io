import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Utterances from "../components/Utterances"

export default ({data}) => {
  const post = data.markdownRemark
  const utterancesRepo = data.site.siteMetadata.utterancesRepo;
  return (
    <Layout>
      <h1>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {!!utterancesRepo ? <Utterances repo={utterancesRepo} /> : ''}
    </Layout>
  )
}

export const query = graphql`
  query mdBlogPost ($slug: String) {
    site {
      siteMetadata {
        utterancesRepo
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`