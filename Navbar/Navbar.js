import React from 'react'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <div className="green-circle"></div>
          <h1>Logo</h1>
        </div>

        <ul className="navbar__links">
          <li className="navbar__link">
            <p>Dashboard</p>
          </li>
          <li className="navbar__link active">
            <p>Find experts</p>
          </li>
          <li className="navbar__link">
            <p>Discussion</p>
          </li>
        </ul>

        <div className="navbar__side-icons">
          <i className="far fa-bell" />
          <i className="far fa-comment-dots" />
          <img src="./about.jpg" alt=""/>
          <i class="fas fa-angle-down"></i>  
        </div>
      </div>
    </div>
  )
}

export default Navbar
