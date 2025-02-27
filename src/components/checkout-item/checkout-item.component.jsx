import React from 'react';
import './checkout-item.styles.scss';
import { clearItemFromCart, removeCartItem, addCartItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price} = cartItem
  const total = price * quantity
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='product'/> 
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>${price} {quantity > 1 ? `/ $${total}` : null}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeCartItem(item))
  })
  export default connect(null, mapDispatchToProps)(CheckoutItem);