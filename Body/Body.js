import React from 'react'
import Main from '../Main.js/Main'
import Sidebar from '../Sidebar/Sidebar'

import './Body.css'

const Body = () => {
  return (
    <div className="main-app">
      <div className="main-app__container">
        <Sidebar className="body__sidebar"/>
        <Main className="body__main"/>
      </div>
    </div>
  )
}

export default Body
