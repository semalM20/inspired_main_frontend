import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartCount(state, action) {
      state.count = action.payload;
    },
  },
});

export const { setCartCount } = cartSlice.actions;
export default cartSlice.reducer;
