import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
  <button 
  className={`${isGoogleSignIn ? 'google-button' : ''} ${isGoogleSignIn ? 'google-button' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;

