import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import { Typewriter } from '../utils/typewriter'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

import drawing from '../../content/images/drawing.png'
import orchestraTwo from '../../content/images/orchestra-2.jpg'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – University of Edinburgh`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h4>
                EST. 1991
              </h4>
              <h1>
                Edinburgh University String Orchestra
                <br />
                <span className="title-desc">Performing </span>
                <br />
                <Typewriter
                  className="title-desc"
                  texts={['Vaughan Williams', 'Grace Williams', 'Dowland', 'Elgar']}
                /><br />
                <span className="title-desc">at the next concert.</span>
              </h1>
              <div className="parallel">
                <div className="left shadow round">
                  <img src={drawing} alt="violin players" />
                </div>
                <div className="right">
                  <p>
                    {`EUSO, the University of Edinburgh's only string ensemble,
                     delivers twice a year concert performances which have been described as
                     "truly polished" and "outstanding". The orchestra continues to give high
                     quality concerts in the University.`}
                  </p>
                  <Link to="/concerts/">
                    Upcoming Concerts
                  </Link>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Latest News
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
            <div className="lead">
              <Link to="/news/">
                More News
              </Link>
            </div>
          </section>
          <hr />
        </div>

        <div className="container">
          <div className="lead">
            <div className="elevator">
              <div className="parallel">
                <div className="left">
                  <p>
                    <h2>Join us</h2>
                    {`We are an ensemble of around 25 string players, rehearsing every
                    Wednesday afternoon from 2.30 - 5.30pm to work towards concerts at
                    the end of each semester. We play a wide variety of music from Handel
                    to Shostakovich and Strauss to Britten and we work with a range of
                    prestigious conductors who help us maintain a very high standard.
                    We welcome students from every faculty, as well as non-students.`}
                    <br />
                    <br />
                    <Link to="/join/">
                      More Information
                    </Link>
                  </p>
                </div>
                <div className="right round shadow">
                  <img src={orchestraTwo} alt="orchestra playing Beethoven" />
                </div>
              </div>
              <hr />
              <div className="parallel">
                <div className="left">
                  <p>
                    <h2>Outreach Events</h2>
                    {`EUSO is passionate about engaging with the community in Edinburgh and helping
                    to spread the joy of music to everyone. We frequently work with care homes and
                    charities and perform pop-up concerts in public spaces such as Waverley Mall.
                    `}
                    <br />
                    <br />
                    <Link to="/outreach/">
                      Get in Touch
                    </Link>
                  </p>                  
                </div>
                <div className="right round shadow">
                  {/* <img src={outreach} alt="Alexia explaining to young students how a violin works" /> Change order of paragraph(before Join us) */}
                </div>
              </div>
              <hr />
              <div className="single">
                <h2>Miscellaneous</h2>
              </div>
              <Link to="/about/">
                Our Story
              </Link>
              <br />
              <Link to="/social/">
                Social Life
              </Link>
              <br />
              <Link to="/sponsors/">
                Sponsor us
              </Link>
              <br />
              <Link to="/contact/#follow-us">
                Follow us
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 3
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 200)
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 9
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
