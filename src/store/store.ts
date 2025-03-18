import { configureStore } from '@reduxjs/toolkit';
import cleaningReducer from './slices/cleaningSlice';
import userReducer from './slices/userSlice';
import reviewsReducer from './slices/reviewsSlice';
// import type { RootState } from '@/types/types';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cleaning: cleaningReducer,
    reviews: reviewsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
 