import React from 'react'

const Item = ({stars , isCheck}) => {
  return (
    <div className="rating-star-container">
      <i class={isCheck ? "fas fa-check-square" : "fas fa-square"}></i>
      <div className="rating-star">
        {Array(stars)
          .fill()
          .map((_) => {
            return(
              <i className="fas fa-star" />
            )
          })
        }
      </div>
    </div>
  )
}

export default Item
