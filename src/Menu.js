import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
       <nav>
    <div className="nav-wrapper">
      <Link to="#" className="brand-logo">Logo</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="">Sass</Link></li>
        <li><Link to="">Components</Link></li>
        <li><Link to="">JavaScript</Link></li>
      </ul>
    </div>
  </nav>
    </>
  )
}
