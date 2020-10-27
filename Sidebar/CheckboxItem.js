import React from 'react'

const CheckboxItem = ({name}) => {
  return (
    <div className="item-row">
      <i class="fas fa-square" />
      <h3>{name}</h3>
    </div>
  )
}

export default CheckboxItem
