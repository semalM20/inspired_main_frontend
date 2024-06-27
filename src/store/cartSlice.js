import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // count: 0,
  count: parseInt(localStorage.getItem("cartCount")) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartCount(state, action) {
      state.count = action.payload;
      localStorage.setItem("cartCount", action.payload.toString());
    },
  },
});

export const { setCartCount } = cartSlice.actions;
export default cartSlice.reducer;
