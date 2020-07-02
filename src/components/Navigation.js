import React, { Component } from 'react'
import { Link } from 'gatsby'
import { BurgerIcon } from '../images/BurgerIcon'
import { CrossIcon } from '../images/CrossIcon'

export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      isOpened: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  handleClose = () => this.setState({ isOpened: false });

  handleOpen = () => this.setState({ isOpened: true });

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props

    return (
      <nav className={scrolled ? 'nav scroll' : 'nav'}>
        <div className="nav-container">
          <div className="brand"> 
            <Link to="/">
              <div className="brand-icon">𝄞</div>
              {/* <img src={house} className="favicon" alt="House with Garden" /> */}
              <span id="brand-title" className="text">EUSO</span>
            </Link>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <Link
                key={link.name}
                to={link.link}
                className={link.name === 'Join us' ? 'link-button' : ''}
                activeClassName="active"
              >
                {link.name}
              </Link>
              ))}
          </div>
          <div className={`mobile-menu ${this.state.isOpened ? 'is-opened' : 'is-closed'}`}>
            <a
              className="open"
              onClick={this.handleOpen}
              role="button"
              tabIndex={0}
            >
              <BurgerIcon />
            </a>
            <a
              className="close"
              onClick={this.handleClose}
              role="button"
              tabIndex={0}
            >
              <CrossIcon />
            </a>
            <nav className="mobile-nav">
              {menuLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.link}
                  className={link.name === 'Join us' ? 'link-button' : ''}
                  activeClassName="active"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    )
  }
}
