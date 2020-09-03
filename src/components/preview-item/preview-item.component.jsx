import React from 'react';
import './preview-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

const PreviewItem = ({item, addCartItem}) => {
  const {name, price, imageUrl} = item;
  return (
    <div className='preview-item'>
    <div className='background-image'
    style={{
      backgroundImage:`url(${imageUrl})`
    }}
    />
  
    <div className='item-info'>
    <span className='name'>{name}</span> <span className='price'>{price}$</span>
    </div>
    <CustomButton inverted onClick={( )=> addCartItem(item)}>Add to cart</CustomButton>
    </div>
  
  )
}


const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
})


export default connect(null, mapDispatchToProps)(PreviewItem);

