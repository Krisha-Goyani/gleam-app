import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CleaningState } from '@/types/types';
import type { ChecklistItem } from '@/types/checklist';

const initialChecklist: ChecklistItem[] = [
  // All Rooms
  { id: 'reachable-cobwebs', title: 'Remove reachable cobwebs', isIncluded: true, section: 'all-rooms' },
  { id: 'ac-vents', title: 'Dust ceiling fans & reachable A/C vents', isIncluded: true, section: 'all-rooms' },
  { id: 'wall-art', title: 'Dust wall arts', isIncluded: false, section: 'all-rooms' },
  { id: 'mirrors', title: 'Clean mirrors', isIncluded: true, section: 'all-rooms' },
  { id: 'window-sills', title: 'Dust window sills and ledges', isIncluded: true, section: 'all-rooms' },
  { id: 'doors', title: 'Dust doors & door frames', isIncluded: true, section: 'all-rooms' },
  { id: 'blinds', title: 'Dust blinds', isIncluded: true, section: 'all-rooms' },
  { id: 'baseboards', title: 'Dust baseboards', isIncluded: true, section: 'all-rooms' },
  { id: 'furniture', title: 'Dust furniture / feather dust cluttered surfaces', isIncluded: false, section: 'all-rooms' },
  { id: 'knick-knacks', title: 'Feather dust knick-knacks & lamps', isIncluded: false, section: 'all-rooms' },
  { id: 'vacuum', title: 'Vacuum floors (carpet & hard surface)', isIncluded: true, section: 'all-rooms' },
  { id: 'mop', title: 'Mop hard surface floors', isIncluded: true, section: 'all-rooms' },

  // Bathrooms
  { id: 'sanitize-toilet', title: 'Clean sanitize toilet & toilet area', isIncluded: true, section: 'bathrooms' },
  { id: 'soap-scum', title: 'Remove soap scum & mildew in shower / tub', isIncluded: true, section: 'bathrooms' },
  { id: 'counter-tops', title: 'Sanitize counter tops', isIncluded: true, section: 'bathrooms' },
  { id: 'sinks-fixtures', title: 'Sanitize sinks & fixtures', isIncluded: true, section: 'bathrooms' },
  { id: 'bath-mats', title: 'Vacuum bath mats', isIncluded: false, section: 'bathrooms' },
  { id: 'bath-trash', title: 'Remove trash & reline trash can', isIncluded: false, section: 'bathrooms' },

  // Kitchen
  { id: 'wipe-counters', title: 'Wipe countertops', isIncluded: true, section: 'kitchen' },
  { id: 'dust-counters', title: 'Dust counter tops item & small appliance', isIncluded: false, section: 'kitchen' },
  { id: 'cabinet-fronts', title: 'Spot clean cabinet fronts', isIncluded: true, section: 'kitchen' },
  { id: 'microwave', title: 'Clean microwave', isIncluded: true, section: 'kitchen' },
  { id: 'appliances', title: 'Clean / polish appliance exteriors', isIncluded: true, section: 'kitchen' },
  { id: 'sink-fixtures', title: 'Sanitize sink & polish fixtures', isIncluded: true, section: 'kitchen' },
  { id: 'kitchen-trash', title: 'Remove trash and reline trash can', isIncluded: false, section: 'kitchen' },

  // Bedrooms
  { id: 'change-linens', title: 'Change linen (if fresh linen is left out)', isIncluded: false, section: 'bedrooms' },
  { id: 'make-beds', title: 'Make beds', isIncluded: false, section: 'bedrooms' },
  { id: 'head-boards', title: 'Polish head boards', isIncluded: false, section: 'bedrooms' },

  // Extras
  { id: 'inside-oven', title: 'Clean inside oven', isIncluded: true, section: 'extras' },
  { id: 'inside-fridge', title: 'Clean inside fridge', isIncluded: true, section: 'extras' },
  { id: 'cabinets-drawers', title: 'Clean inside cabinets & drawers', isIncluded: true, section: 'extras' },
  { id: 'interior-windows', title: 'Clean interior windows', isIncluded: true, section: 'extras' },
  { id: 'window-blinds', title: 'Clean window blinds', isIncluded: true, section: 'extras' },
  { id: 'baseboards-extra', title: 'Clean baseboards', isIncluded: true, section: 'extras' }
];

const initialState: CleaningState & { checklist: ChecklistItem[] } = {
  services: [
    {
      id: 1,
      name: "Deep Cleaning",
      rating: 4.0,
      includes: {
        bdr: 2,
        bath: 2,
        ktchn: 1
      },
      price: 40.00,
      originalPrice: 80.00,
      mainImage: "/Image/cleaning-img.png",
      thumbnails: [
        "/Image/cleaning-img.png",
        "/Image/extra-img2.png",
        "/Image/cleaning-img.png",
        "/Image/cleaning-img.png",
        "/Image/cleaning-img.png",
        "/Image/cleaning-img.png",
        "/Image/cleaning-img.png",
        "/Image/cleaning-img.png"
      ],
      extras: [
        {
          id: 1,
          name: "Bathroom",
          image: "/Image/extra-img1.png",
          price: 40.99,
          originalPrice: 80.00
        },
        {
          id: 2,
          name: "Bedroom",
          image: "/Image/extra-img2.png",
          price: 40.99,
          originalPrice: 80.00
        },
        {
          id: 3,
          name: "Hand Wash Dishes",
          image: "/Image/extra-img3.png",
          price: 40.99,
          originalPrice: 80.00
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
  selectedExtras: [],
  checklist: initialChecklist
};

const cleaningSlice = createSlice({
  name: 'cleaning',
  initialState,
  reducers: {
    selectService: (state, action: PayloadAction<number>) => {
      state.selectedService = state.services.find(service => service.id === action.payload) || null;
      state.selectedExtras = [];
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
    },
    toggleChecklistItem: (state, action: PayloadAction<string>) => {
      const item = state.checklist.find(item => item.id === action.payload);
      if (item) {
        item.isIncluded = !item.isIncluded;
      }
    },
    updateChecklistItems: (state, action: PayloadAction<{ ids: string[]; isIncluded: boolean }>) => {
      const { ids, isIncluded } = action.payload;
      state.checklist.forEach(item => {
        if (ids.includes(item.id)) {
          item.isIncluded = isIncluded;
        }
      });
    }
  }
});

export const { selectService, updateExtra, toggleChecklistItem, updateChecklistItems } = cleaningSlice.actions;
export default cleaningSlice.reducer;
