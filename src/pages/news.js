import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default class BlogPage extends Component {
  state = {
    searchTerm: '',
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges,
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value }, () => this.filterPosts())
  }

  filterPosts = () => {
    const { posts, searchTerm } = this.state

    const filteredPosts = posts.filter(post =>
      post.node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    this.setState({ filteredPosts })
  }

  render() {
    const { filteredPosts } = this.state

    return (
      <Layout>
        <Helmet title={`News – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <h1 className="articles-title">News</h1>
          <p>{`On this page, we regularly post about upcoming concerts, events, auditions, and much more.
               If you want to keep updated, you can subscribe to our
             `}
            <Link to="/newsletter/">
              newsletter
            </Link>
            {`.`}
          </p>
          <PostListing postEdges={filteredPosts} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 180)
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 50, height: 50) {
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
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
