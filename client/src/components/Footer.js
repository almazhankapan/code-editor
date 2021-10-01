import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import trakt from '../images/logo.png'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <a href="https://hello-air.com/" className="footer-links">
          Air Concepts
        </a>
      </div>
    </footer>
  )
}

export default Footer
