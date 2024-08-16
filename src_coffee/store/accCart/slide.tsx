import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItemCart } from '../../lib/types';

interface InitialProps {
  listProductsInCart: ProductItemCart[];
  isSubmitting: boolean;
}

const initialState: InitialProps = {
  listProductsInCart: [],
  isSubmitting: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    updateListProductsInCart: (state, action: PayloadAction<ProductItemCart[]>) => {
      state.listProductsInCart = action.payload;
    },
    addProductToCart: (state, action: PayloadAction<ProductItemCart>) => {
      state.listProductsInCart.push(action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.listProductsInCart.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.listProductsInCart.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.listProductsInCart = state.listProductsInCart.filter(item => item.id !== action.payload);
    },
    setIsSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    resetCart: state => {
      return initialState;
    },
  },
});

export const {
  updateListProductsInCart,
  addProductToCart,
  setIsSubmitting,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart
} = cartSlice.actions;


export default cartSlice.reducer;
