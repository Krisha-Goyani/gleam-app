import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  location: string;
  favorites: string[];
  notifications: number;
  cartItems: number;
}

const initialState: UserState = {
  location: 'Austin, Texas',
  favorites: [],
  notifications: 0,
  cartItems: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    }
  }
});

export const { setLocation, addToFavorites, setNotifications, setCartItems } = userSlice.actions;
export default userSlice.reducer;
