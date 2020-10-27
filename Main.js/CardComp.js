import React from 'react'

import './CardComp.css'

const CardComp = () => {
  return (
    <div className="card-container">
      <div className="card-inner-container">
        <div className="card-col-1">
          <img src="./about.jpg" alt="" className="card-image"/>
          <div className="card-price-rating">
            <div className="card-price-container">
              <h3>Price:</h3>
              <h3 className="special">Free</h3>
            </div>
            <div className="card-rating-container">
              <i className="fas fa-star card-star" />
              <h3 className="card-rating">4.9</h3>
              <h3>(120)</h3>
            </div>
          </div>
          {/* <div className=""></div> */}
        </div>

        <div className="card-col-2"> 
        {/* START PROFILE AND VIEW BUTTON CONTAINER TWO COLS FLEX THEM */}
          <div className="card-col-col">
            <div className="card-profile">
              <h1>David Melvik</h1>
              <h3>Founder @ The Millennials & CEO @ ABC</h3>
            </div>
            <div className="view-profile">
              <div className="view-inner-container">
                  <i className="far fa-heart" />
                <div className="view-container">
                  <button>View Profile</button>
                </div>
              </div>
            </div>
          </div>


          <div className="card-main-content">
            <div className="card-session-container">
              <div className="card-session-available">
                <i className="far fa-bell" />
                <h3>02 Free sessions available</h3>
              </div>
              <div className="card-location">
                <i className="fas fa-map-marker-alt" />
                <h3>Tampa, FL, USA</h3>
              </div>
              <div className="card-language">
                <span>T</span>
                <h3>Greek, English, French</h3>
              </div>
            </div>

            <div className="card-main-about">
              <h3>t quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsum voluptatem quia voluptas quia voluptas sit aspernatur aut odit aut fugit, sed quia consequunter magni dolored eos qui ration voluptatem sequi nesciunt. Neque porro quisquam est,</h3>
            </div>

            <div className="card-bubble-container">
              <h3 className="card-bubble">Marketing</h3>
              <h3 className="card-bubble">SEO</h3>
              <h3 className="card-bubble">Content Marketing</h3>
              <h3 className="card-bubble">Marketing Automation</h3>              
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default CardComp
