import React from 'react';
import './preview-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

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
  <CustomButton inverted>Add to cart</CustomButton>
  </div>
)

export default PreviewItem;