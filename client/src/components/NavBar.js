import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">Air Concepts</div>
      <div className="navbar__item">
        <Link to="/Home" id="home" className="menu-item">
          Home
        </Link>
      </div>
      <div className="navbar__item">
        <Link to="/compiler-py-cpp" className="menu-item">
          Python, C++ Compiler
        </Link>
      </div>
      <div className="navbar__item">
        <Link to="/editor-html-css" className="menu-item">
          HTML, CSS, JS Editor
        </Link>
      </div>
    </header>
  )
}
export default NavBar
