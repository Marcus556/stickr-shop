import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/sticker.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartToggleCart } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, toggleCart }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
      <span className='logo-name'>Stickr Shop</span>
    </Link>
    <div className='header-menu'>
    <Link className='header-menu-item' to='/shop'>
      SHOP
    </Link>
    <Link className='header-menu-item' to='/contact'>
      CONTACT
    </Link>
    {!currentUser ? (
      <Link className='header-menu-item' to='/signin'>
      SIGN IN
      </Link>
    ) : (
      <div className='header-menu-item' onClick={() => auth.signOut()}>
      SIGN OUT
      </div>
    )}
    <div className='header-menu-item'>
      <CartIcon />
    </div>
    </div>
    {toggleCart ? (<CartDropdown />) : null}
  </div>

)


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  toggleCart: selectCartToggleCart
})


export default connect(mapStateToProps)(Header);