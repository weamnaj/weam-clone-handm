import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  items: [], // Array to store products in the cart
  totalPrice: 0, // Store the total price
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        state.totalPrice += item.price * item.quantity;
      } else {
        state.items.push(item);
        state.totalPrice += item.price * item.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

// Export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;