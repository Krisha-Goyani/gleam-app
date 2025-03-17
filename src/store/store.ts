import { configureStore } from '@reduxjs/toolkit';
import cleaningReducer from './slices/cleaningSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cleaning: cleaningReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
