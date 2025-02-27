import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCart } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        cartItems.length ? (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) : (<span className='empty-msg'>You have no products in your cart.</span>)
      }
      </div>
      <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCart())
      }}>CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));