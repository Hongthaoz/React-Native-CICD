import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem, ProductItemCart } from '../../lib/types';

interface InitialProps {
  listProducts: ProductItem[];
  detailProduct: ProductItem | null;
  listProductFavourites: ProductItemCart[];
  isSubmitting: boolean;
}

const initialState: InitialProps = {
  listProducts: [],
  detailProduct: null,
  listProductFavourites: [],
  isSubmitting: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    updateListProducts: (state, action: PayloadAction<ProductItem[]>) => {
      state.listProducts = action.payload;
    },
    updateDetailProduct: (state, action: PayloadAction<ProductItem | null>) => {
      state.detailProduct = action.payload;
    },
    updateListProductFavourites: (state, action: PayloadAction<ProductItemCart[]>) => {
      state.listProductFavourites = action.payload;
    },
    addProductFavourite: (state, action: PayloadAction<ProductItemCart>) => {
      state.listProductFavourites.push(action.payload);
    },
    setIsSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    resetSplash: state => {
      return initialState;
    },
  },
});

export const {
  updateListProducts,
  updateDetailProduct,
  setIsSubmitting,
  updateListProductFavourites,
  addProductFavourite
} = homeSlice.actions;


export default homeSlice.reducer;
