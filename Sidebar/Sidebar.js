import React from 'react'
import CheckboxItem from './CheckboxItem'
import Item from './Item'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h2>Filters</h2>
      </div>

      <div className="sidebar-container">
        <div className="sidebar-inner-container">
          <div className="expertise">
            <h2>Expertise</h2>
            <div className="expertise-container">
              <div className="expertise-branding-container">
                <div className="expertise-branding-row active-row">
                  <h3 className="curve-box blue">Branding <i className="fas fa-times" /></h3>
                  <i className="fas fa-search"></i>
                </div>
                <div className="expertise-branding-row">
                <h3 className="curve-box green">Strategy <i className="fas fa-times" /></h3>
                </div>
              </div>
            </div>
          </div>

          {/* FOCUS CONTAINER START */}

          <div className="focus">
            <h2>Foucs Area</h2>
            <div className="focus-container">
              <div className="focus-area-container">

                <div className="focus-area-row active-row">
                  <div className="focus-area-row-row">
                    <h3 className="curve-box blue">Focus Area <i className="fas fa-times" /></h3>
                    <h3 className="curve-box blue">Focus Area <i className="fas fa-times" /></h3>
                  </div>
                  <i className="fas fa-search"></i>
                </div>

                <div className="focus-area-row">
                  <h3 className="curve-box green">Focus Area <i className="fas fa-times" /></h3>
                  <h3 className="curve-box blue">Focus Area <i className="fas fa-times" /></h3>
                </div>

              </div>
            </div>
          </div>

          {/* FOCUS CONTAINER END */}

          {/* RATING CONTAINER START */}

          <div className="rating">
            <h2>Rating</h2>
            <div className="rating-container">
              <div className="rating-row">
                <div className="rating-column">
                  <Item 
                    stars={4}
                    isCheck={true}
                  />
                  <Item 
                    stars={3}
                    isCheck={false}
                  />
                </div>

                <div className="rating-column">
                  <Item 
                    stars={3}
                    isCheck={false}
                  />
                  <Item 
                    stars={2}
                    isCheck={false}
                  />
                </div>
              </div>            
            </div>
          </div>

          {/* RATING CONTAINER END */}

          {/* PRICE CONTAINER START */}

          <div className="price">
            <h2>Price</h2>
            <div className="price-container">

              <CheckboxItem 
                name="Free"
              />
              <CheckboxItem 
                name="Less than $25"
              />
              <CheckboxItem 
                name="Less than $25"
              />
              <CheckboxItem 
                name="$25 - $50"
              />
              <CheckboxItem 
                name="$50 - $100"
              />
              <CheckboxItem 
                name="More than $100"
              />
            </div>
          </div>

          {/* PRICE CONTAINER END */}

          {/* SESSION CONTAINER START */}

          <div className="session">
            <h2>Session</h2>
            <div className="session-container">
              <CheckboxItem 
                name="30 min"
              />
              <CheckboxItem 
                name="60 min"
              />
              <CheckboxItem 
                name="15 min"
              />
            </div>
          </div>

          {/* SESSION CONTAINER END */}

          {/* LANGUAGE CONTAINER START */}
          <div className="language">
            <h2>Language</h2>
            <div className="language-container">
              <CheckboxItem 
                name="English"
              />
              <CheckboxItem 
                name="French"
              />
              <CheckboxItem 
                name="German"
              />
              <CheckboxItem 
                name="Hindi"
              />
              <CheckboxItem 
                name="Arabic"
              />
              <CheckboxItem 
                name="Mandarin Chinese"
              />
            </div>
          </div>
          {/* LANGUAGE CONTAINER END */}


        </div>
      </div>
    </div>
  )
}

export default Sidebar
