import { configureStore } from '@reduxjs/toolkit';
import cleaningReducer from './slices/cleaningSlice';
import userReducer from './slices/userSlice';
import reviewsReducer from './slices/reviewsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cleaning: cleaningReducer,
    reviews: reviewsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
