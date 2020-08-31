import React from 'react';
import {ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import {toggleCart} from '../../redux/cart/cart.actions'
import {setCartCount} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCart}) => (
  <div className='cart-icon' onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-counter'>0</span>
  </div>
) 


const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart()),
  setCartCount: () => dispatch(setCartCount())
}) 

export default connect(null, mapDispatchToProps)(CartIcon);