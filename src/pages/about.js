import React, { useMemo } from 'react'
import { graphql,Link } from 'gatsby'
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
          <h1>About</h1>
          <h4>History</h4>
          <p>
            The Edinburgh University String Orchestra was founded in October 1991 by Emre Araci,
            a second year music student at the time. The debut concert was conducted by Emre on
            1st February 1992 in the Reid Concert Hall. A review in the Student newspaper described
            the orchestra’s performance as “truly polished” and remarked on the orchestra’s “huge potential”.
            Without doubt, the orchestra has lived up to this prediction and continues to deliver high
            quality concerts in the University.
          </p>
          <h4>Diversity</h4>
          <p>
            The orchestra rehearses weekly during term time and has worked with talented conductors including
            Jim Lowe, Matthew Owens, Hugh Thomas, Robert Dick, Andrew Griffiths, William Conway, Richard Lewis,
            Michael Bawtree, Chris George and Iain McLarty. Membership has always been open to all students of
            the University and as a result, nearly all faculties are represented.
          </p>
          <h4>Tour</h4>
          <p>
            Every year, EUSO takes the opportunity to play around Scotland on tour. In 2014, we enjoyed a
            four-day trip to the Isle of Arran, playing in Brodick, Lamlash and Shiskine to enthusiastic audiences.
            The following year, we visited Ullapool, and gave performances at Ullapool Church of Scotland,
            Poolewe Village Hall and the Aultbea Hotel.
          </p>
          <h4>Emre Araci Competition</h4>
          <p>
            An annual competition to support and promote new music was proposed in 1998 and so the Emre Araci
            Composition Competition was born. This gives students the chance to hear their compositions for
            string orchestra; the winning entry is performed by the orchestra on tour.
          </p>
          <h1>Our Executives</h1>
          <p>
            A remarkable orchestra cannot exist without remarkable people who
            put their hearts into keeping EUSO running.
          </p>
          <Guides data={simplifiedPosts} />
          <p>
            <br />
            <Link to="/committee/">Whole committee</Link>
          </p>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutQuery {
    allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { featured: { eq: true } } }
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
