import React from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
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
      <div className="email">
        <a href="mailto:danshafie@gmail.com">danshafie@gmail.com</a>
      </div>
    </div>
  )
}

export default Footer
