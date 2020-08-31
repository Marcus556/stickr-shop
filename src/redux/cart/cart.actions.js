import { CartActionTypes } from './cart.types';


export const toggleCart = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_COMPONENT
  }
}

export const setCartCount = () => {
  return {
    type: CartActionTypes.SET_CART_COUNT
  }
}