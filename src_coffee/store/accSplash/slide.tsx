import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//Khai báo type của mỗi phần tử trong mảng splash
interface SplashScreenItem {
  id: number;
  title: string;
  image: string;
}

// Khai báo type của initial state
interface InitialProps {
  listSplashScreen: SplashScreenItem[];
  isSubmitting: boolean;
}

// Initial state with type annotations
const initialState: InitialProps = {
  listSplashScreen: [],
  isSubmitting: false,
};

// Create the slice
export const splashSlice = createSlice({
  name: 'splash',
  initialState: initialState,
  reducers: {
    updateListSplashScreen: (state, action: PayloadAction<SplashScreenItem[]>) => {
      state.listSplashScreen = action.payload;
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
  updateListSplashScreen,
  setIsSubmitting
} = splashSlice.actions;


export default splashSlice.reducer;
