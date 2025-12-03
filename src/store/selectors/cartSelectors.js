import { createSelector } from '@reduxjs/toolkit';

// Base selector
const selectCartList = (state) => state.cart.cartList;

// Memoized selector for total price
export const selectTotalPrice = createSelector(
  [selectCartList],
  (cartList) =>
    cartList
      .reduce((prev, curr) => {
        return (curr.quantity || 0) * (curr.price || 0) + prev;
      }, 0)
      .toFixed(2)
);

// Memoized selector for total items
export const selectTotalItems = createSelector(
  [selectCartList],
  (cartList) =>
    cartList.reduce((total, item) => total + (item.quantity || 0), 0)
);

// Memoized selector for shipping fee
export const selectShippingFee = createSelector(
  [selectTotalPrice],
  (totalPrice) => (parseFloat(totalPrice) > 5000 ? 0 : 500)
);

// Memoized selector for final total
export const selectFinalTotal = createSelector(
  [selectTotalPrice, selectShippingFee],
  (totalPrice, shippingFee) =>
    (parseFloat(totalPrice) + shippingFee).toFixed(2)
);

// Check if cart is empty
export const selectIsCartEmpty = createSelector(
  [selectCartList],
  (cartList) => cartList.length === 0
);
