import React from 'react';
import './preview-item.styles.scss'

const PreviewItem = ({name, price, imageUrl}) => (
  <div className='preview-item'>
  <div className='background-image'
  style={{
    backgroundImage:`url(${imageUrl})`
  }}
  />

  <div className='item-info'>
  <span className='name'>{name}</span> <span className='price'>{price}$</span>
  </div>
  </div>
)

export default PreviewItem;