import { createSlice } from '@reduxjs/toolkit';
import type { ReviewsState } from '@/types/types';

const initialState: ReviewsState = {
  averageRating: 4.0,
  totalRatings: 19000,
  totalReviews: 503,
  ratingDistribution: [
    { rating: 5, count: 4913 },
    { rating: 4, count: 2290 },
    { rating: 3, count: 1161 },
    { rating: 2, count: 453 },
    { rating: 1, count: 323 },
  ],
  serviceMetrics: {
    quality: 4.0,
    onTime: 4.0,
    cleanliness: 4.0,
  },
  userReviews: [
    {
      id: '1',
      rating: 4.0,
      title: 'Auctor donec amet facilisis ornare',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscinget, sed do eiusmod',
      author: 'Josephine Jose',
      timeAgo: '10h ago',
      likes: 5,
      dislikes: 0,
      images: ['/Image/review-img.png', '/Image/review-img.png', '/Image/review-img.png']
    },
    {
      id: '2',
      rating: 4.0,
      title: 'Lorem ipsum dolor',
      description: 'Facilisi habitant ipsum metus in laoreet. Sed non non dolor tincidunt aliquam lectus arcu. Ornare pellentesque leo diam tortor. Auctor imperdiet a dolor eget amet volutpat quis dolor. Dolor viverra est ultrices id a pretium eget. Euismod arcu iaculis enim tristique aliquam amet.',
      author: 'Josephine Jose',
      timeAgo: '10h ago',
      likes: 5,
      dislikes: 0,
    },
    {
      id: '3',
      rating: 4.0,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Nunc amet lacus arcu pharetra. Enim ullamcorper hendrerit a senectus tellus amet nam faucibus. Orci sed.',
      author: 'Josephine Jose',
      timeAgo: '10h ago',
      likes: 5,
      dislikes: 0,
    },
    {
      id: '4',
      rating: 4.0,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Nunc amet lacus arcu pharetra. Enim ullamcorper hendrerit a senectus tellus amet nam faucibus. Orci sed.',
      author: 'Josephine Jose',
      timeAgo: '10h ago',
      likes: 5,
      dislikes: 0,
    },
    {
      id: '5',
      rating: 4.0,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Nunc amet lacus arcu pharetra. Enim ullamcorper hendrerit a senectus tellus amet nam faucibus. Orci sed.',
      author: 'Josephine Jose',
      timeAgo: '10h ago',
      likes: 5,
      dislikes: 0,
    },
  ],
  displayedReviews: 3,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    showMoreReviews: (state) => {
      state.displayedReviews += 3;
    },
    showLessReviews: (state) => {
      state.displayedReviews = 3; // Reset to initial number of reviews
    }
  }
});

export default reviewsSlice.reducer;