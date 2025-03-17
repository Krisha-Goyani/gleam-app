import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cleaningReducer from './slices/cleaningSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cleaning: cleaningReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
