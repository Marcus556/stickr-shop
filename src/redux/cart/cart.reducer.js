import { CartActionTypes } from './cart.types'
import {addItemToCart} from './cart.utils'
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


    default:
      return state;
    
  }
}

export default cartReducer;

