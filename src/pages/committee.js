import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../layout'
import Guides from '../components/Guides'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function BlogIndex({ data }) {
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(
    () => getSimplifiedPosts(posts, { thumbnails: true }),
    [posts]
  )

  return (
    <Layout>
      <Helmet title={`Committee – ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <section>
          <h1>Committee</h1>
          <p>
            The orchestra prides itself on the fact that it is independently run by students.
            The committee oversees the complete organisation of the orchestra, from the everyday
            tasks of setting out the seats for rehearsals, to the larger tasks of the office bearers
            in looking after the finances of the society.
          </p>
          <Guides data={simplifiedPosts} />
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CommitteeQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { template: { eq: "committee" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
