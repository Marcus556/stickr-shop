import { createSelector} from 'reselect';

//returns just a slice of state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) =>cart.cartItems
)   

export const selectCartToggleCart = createSelector(
  [selectCart],
  cart => cart.toggleCart
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accQuantity, cartItem) =>
        accQuantity + cartItem.quantity,
        0
    )
);