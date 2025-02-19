import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

interface UIState {
  selectedProduct: Product | null;
  isModalOpen: boolean;
  searchTerm: string;
}

const initialState: UIState = {
  selectedProduct: null,
  isModalOpen: false,
  searchTerm: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSelectedProduct, setIsModalOpen, setSearchTerm } = uiSlice.actions;
export default uiSlice.reducer;