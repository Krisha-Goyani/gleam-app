import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CleaningState } from '@/types/store';

const initialState: CleaningState = {
  services: [
    {
      id: 1,
      name: "Deep House Cleaning",
      rating: 4.8,
      includes: {
        bdr: 2,
        bath: 2,
        ktchn: 1
      },
      price: 149.99,
      originalPrice: 199.99,
      mainImage: "/Image/cleaning-img.png",
      thumbnails: [
        "/Image/cleaning-img.png",
        "/Image/cleaning/thumbnails/deep-2.jpg",
        "/Image/cleaning/thumbnails/deep-3.jpg",
        "/Image/cleaning/thumbnails/deep-4.jpg"
      ],
      extras: [
        {
          id: 1,
          name: "Extra Bathroom",
          image: "/Image/extra-img1.png",
          price: 29.99,
          originalPrice: 39.99
        },
        {
          id: 2,
          name: "Extra Bedroom",
          image: "/Image/extra-img2.png",
          price: 34.99,
          originalPrice: 44.99
        },
        {
          id: 3,
          name: "Hand Wash Dishes",
          image: "/Image/extra-img3.png",
          price: 19.99,
          originalPrice: 24.99
        }
      ]
    },
    {
      id: 2,
      name: "Regular House Cleaning",
      rating: 4.6,
      includes: {
        bdr: 1,
        bath: 1,
        ktchn: 1
      },
      price: 89.99,
      originalPrice: 119.99,
      mainImage: "/Image/cleaning/main/regular-cleaning.jpg",
      thumbnails: [
        "/Image/cleaning/thumbnails/regular-1.jpg",
        "/Image/cleaning/thumbnails/regular-2.jpg",
        "/Image/cleaning/thumbnails/regular-3.jpg",
        "/Image/cleaning/thumbnails/regular-4.jpg"
      ],
      extras: [
        {
          id: 5,
          name: "Extra Bathroom",
          image: "/Image/cleaning/extras/bathroom.jpg",
          price: 24.99,
          originalPrice: 34.99
        },
        {
          id: 6,
          name: "Extra Bedroom",
          image: "/Image/cleaning/extras/bedroom.jpg",
          price: 29.99,
          originalPrice: 39.99
        },
        {
          id: 7,
          name: "Hand Wash Dishes",
          image: "/Image/cleaning/extras/dishes.jpg",
          price: 14.99,
          originalPrice: 19.99
        }
      ]
    }
  ],
  selectedService: null,
  selectedExtras: []
};

const cleaningSlice = createSlice({
  name: 'cleaning',
  initialState,
  reducers: {
    selectService: (state, action: PayloadAction<number>) => {
      state.selectedService = state.services.find(service => service.id === action.payload) || null;
      state.selectedExtras = []; // Reset extras when switching services
    },
    updateExtra: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const existingExtra = state.selectedExtras.find(e => e.id === id);
      
      if (quantity === 0) {
        // Remove extra if quantity is 0
        state.selectedExtras = state.selectedExtras.filter(e => e.id !== id);
      } else if (existingExtra) {
        // Update quantity if extra exists
        existingExtra.quantity = quantity;
      } else {
        // Add new extra with quantity
        const serviceExtra = state.selectedService?.extras.find(e => e.id === id);
        if (serviceExtra) {
          state.selectedExtras.push({ ...serviceExtra, quantity });
        }
      }
    }
  }
});

export const { selectService, updateExtra } = cleaningSlice.actions;
export default cleaningSlice.reducer;
