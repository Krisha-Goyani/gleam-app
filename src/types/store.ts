import { configureStore } from '@reduxjs/toolkit';
import cleaningReducer from '@/store/slices/cleaningSlice';

// User State
export interface UserState {
  location: string;
  favorites: string[];
  notifications: number;
  cartItems: number;
}

// Cleaning State
export interface ServiceIncludes {
  bdr: number;
  bath: number;
  ktchn: number;
}

export interface CleaningExtra {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity?: number;
}

export interface CleaningService {
  id: number;
  name: string;
  rating: number;
  includes: ServiceIncludes;
  price: number;
  originalPrice: number;
  mainImage: string;
  thumbnails: string[];
  extras: CleaningExtra[];
}

export interface CleaningState {
  services: CleaningService[];
  selectedService: CleaningService | null;
  selectedExtras: CleaningExtra[];
}

// Root State
export interface RootState {
  user: UserState;
  cleaning: CleaningState;
}

const store = configureStore({
  reducer: {
    cleaning: cleaningReducer
  }
});

export type AppDispatch = typeof store.dispatch;

export default store;
