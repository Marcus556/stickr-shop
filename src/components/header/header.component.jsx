import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/sticker.svg';
const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
      <span className='logo-name'>Sticker Shop</span>
    </Link>
    <div className='header-menu'>
    <Link className='header-menu-item' to='/shop'>
      SHOP
    </Link>
    <Link className='header-menu-item' to='/shop'>
      CONTACT
    </Link>

    </div>
  </div>

)

export default Header;