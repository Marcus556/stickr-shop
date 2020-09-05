import { CartActionTypes } from './cart.types'
import {addItemToCart, removeItemFromCart} from './cart.utils'
//setting initial state
const INITIAL_STATE = {
  toggleCart: false,
  cartItems: [],
}

//cart reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //toggles state of toggleCart, true or false.
    case CartActionTypes.TOGGLE_CART_COMPONENT:
      return {
        ...state, 
        toggleCart: !state.toggleCart
      };
      //Adds payload into cartItems
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state, 
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
    return {
      ...state,
      cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
    }
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    default:
      return state;
    
  }
}

export default cartReducer;

