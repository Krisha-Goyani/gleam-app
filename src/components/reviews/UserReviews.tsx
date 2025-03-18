import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
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
    <div className="bg-white p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Most Useful Reviews</h2>
      
      <div className="divide-y divide-gray-200">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      
      <div className="mt-4">
        {hasMoreReviews && (
          <button
            onClick={handleShowMore}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Show more reviews
          </button>
        )}
        {isExpanded && !hasMoreReviews && (
          <button
            onClick={handleShowLess}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Show less reviews
          </button>
        )}
      </div>
    </div>
  );
};

export default UserReviews; 