import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/types/types';
import ReviewCard from './ReviewCard';

const UserReviews = () => {
  const dispatch = useDispatch();
  const { userReviews, displayedReviews } = useSelector((state: RootState) => state.reviews);
  
  const visibleReviews = userReviews.slice(0, displayedReviews);
  const hasMoreReviews = userReviews.length > displayedReviews;
  const isExpanded = displayedReviews > 3;

  const handleShowMore = () => {
    dispatch({ type: 'reviews/showMoreReviews' });
  };

  const handleShowLess = () => {
    dispatch({ type: 'reviews/showLessReviews' });
  };

  return (
    <div className="bg-white pt-12">
      <h2 className="text-lg font-medium text-gray-900 ">Most Useful Reviews</h2>
      
      <div className="divide-y divide-gray-200">
        {visibleReviews.map((review, index) => (
          <ReviewCard 
            key={review.id} 
            review={review} 
            isLast={index === visibleReviews.length - 1}
          />
        ))}
      </div>
      
      <div className="mt-4 mb-10">
        {hasMoreReviews && (
          <button
            onClick={handleShowMore}
            className="text-blue-primary hover:text-blue-700 text-base font-circular-std font-normal"
          >
            Show more reviews
          </button>
        )}
        {isExpanded && !hasMoreReviews && (
          <button
            onClick={handleShowLess}
            className="text-blue-primary hover:text-blue-700 text-base font-circular-std font-normal"
          >
            Show less reviews
          </button>
        )}
      </div>
    </div>
  );
};

export default UserReviews;