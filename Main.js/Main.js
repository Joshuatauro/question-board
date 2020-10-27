import React from 'react'
import CardComp from './CardComp'

import './Main.css'

const Main = () => {
  return (
    <div className="main">
      <div className="main-content">
        <h2>Featured Experts</h2>
        <div className="dropdown-container">
          <h3>Best Match</h3>
          <i className="fas fa-angle-down" />
        </div>
      </div>

      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
      <CardComp />
    </div>
  )
}

export default Main
