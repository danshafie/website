import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer-links">
          <li>
            <a href="http://www.twitter.com/shafielololol" target="_blank">
              {' '}
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="http://www.github.com/danshafie" target="_blank">
              {' '}
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer
