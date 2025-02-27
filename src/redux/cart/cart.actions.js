import { CartActionTypes } from './cart.types';


export const toggleCart = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_COMPONENT
  }
}

export const addCartItem = (item) => {
  return {
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
  }
}

export const removeCartItem = (item) => {
  return {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
  }
}

export const getCartLength = () => {
  return {
    type: CartActionTypes.GET_CART_LENGTH
  }
}

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})