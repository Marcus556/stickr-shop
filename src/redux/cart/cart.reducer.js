import { CartActionTypes } from './cart.types'

const INITIAL_STATE = {
  toggleCart: false,
  cartCount: '0'
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_COMPONENT:
      return {
        ...state, 
        toggleCart: !state.toggleCart
      }
      case CartActionTypes.SET_CART_COUNT:
        return {
          ...state, 
          cartCount: ++state.cartCount
        }

    default:
      return state;
    
  }
}

export default cartReducer;