import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

interface CartState {
  items: Product[];
  count: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      state.count += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;