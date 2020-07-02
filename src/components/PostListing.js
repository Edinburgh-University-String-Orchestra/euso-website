import React, { Component } from 'react'
import { Link } from 'gatsby'
import { formatDate } from '../utils/global'

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props
    const postList = postEdges.map(postEdge => {
      return {
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        categories: postEdge.node.frontmatter.categories,
      }
    })
    return postList
  }

  render() {
    const { simple } = this.props
    const postList = this.getPostList()

    return (
      <section className={`posts ${simple ? 'simple' : ''}`}>
        {postList.map(post => {

          const date = formatDate(post.date)

          return (
            <Link to={post.path} key={post.title}>
              <div className="each">
                <div />
                <div className="each-list-item">
                  {!simple ? <h2>{post.title}</h2> : <h3>{post.title}</h3>}
                  <div className="datetime">{date}</div>
                  {!simple ? <div /> : <p>{post.excerpt}</p>}
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    )
  }
}
