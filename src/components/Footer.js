import React, { Component } from 'react'
import { Link } from 'gatsby'
import constitution from '../../content/files/constitution-2020-03.pdf'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container-extended">
        <div>
          <Link to="/contact/">Contact</Link>
          <Link to="/newsletter/">Newsletter</Link>
          <a href="https://www.string.eusa.ed.ac.uk/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
        </div>
        <div>
          <Link to="/sponsors/">Sponsors</Link>
          <Link to="/committee/">Committee</Link>
          <a href={constitution} target="_blank" rel="noopener noreferrer">
            Constitution
          </a>
        </div>
      </footer>
    )
  }
}
