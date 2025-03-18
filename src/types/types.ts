import type { ChecklistItem } from './checklist';

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
  checklist: ChecklistItem[];
}

// Make RatingDistribution exportable
export interface RatingDistribution {
  rating: number;
  count: number;
}

interface ServiceMetrics {
  quality: number;
  onTime: number;
  cleanliness: number;
}

export interface ReviewsState {
  averageRating: number;
  totalRatings: number;
  totalReviews: number;
  ratingDistribution: RatingDistribution[];  // Now using exported interface
  serviceMetrics: ServiceMetrics;
  userReviews: Review[];        // Add userReviews array
  displayedReviews: number;     // Add displayedReviews counter
}

// Root State
export interface RootState {
  user: UserState;
  cleaning: CleaningState;
  reviews: ReviewsState;  // Add reviews to RootState
}

// Import dispatch type from the store
export type { AppDispatch } from '@/store/store';


export interface Review {
  id: string;
  rating: number;
  title: string;
  description: string;
  author: string;     // Keep using author instead of userName
  timeAgo: string;
  likes: number;
  dislikes: number;
  images?: string[];
}