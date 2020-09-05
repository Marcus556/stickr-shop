import React from 'react';
import { connect } from 'react-redux';
import './cart-item.styles.scss';

import { clearItemFromCart } from '../../redux/cart/cart.actions'


const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='cart item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='name'>{quantity}x ${price}</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch =>  {
clearItemFromCart(dispatch)
}
export default connect(null, mapDispatchToProps)(CartItem);