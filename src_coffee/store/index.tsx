import { configureStore } from '@reduxjs/toolkit';
import splashReducer from '../store/accSplash/slide';
import homeReducer from '../store/accHome/slide';
import cartReducer from '../store/accCart/slide';

const rootReducer = {
    Splash: splashReducer,
    Home: homeReducer,
    Cart: cartReducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {Splash: SplashState}
export type AppDispatch = typeof store.dispatch;
