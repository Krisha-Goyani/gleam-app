import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from '@/types/types';

const initialState: UserState = {
  location: 'New York',
  favorites: [],
  notifications: 0,
  cartItems: 0
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.favorites.indexOf(id);
      if (index === -1) {
        state.favorites.push(id);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    updateNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
    }
  }
});

export const { setLocation, toggleFavorite, updateNotifications, updateCartItems } = userSlice.actions;
export default userSlice.reducer;
