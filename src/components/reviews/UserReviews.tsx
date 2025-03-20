import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/types/types';
import ReviewCard from './ReviewCard';
import Image from 'next/image';

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
     
      
     

      <div className="divide-y divide-gray-200">
        {visibleReviews.map((review, index) => (
          <ReviewCard 
            key={review.id} 
            review={review} 
            isLast={index === visibleReviews.length - 1}
          />
        ))}
      </div>
      
      <div className="md:mt-4 mb-10">
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
      <h2 className="md-lg:hidden text-lg font-medium text-black-secondary mb-4 font-circular-std">Best cleaning services in and around Washington</h2>
      <div className="md-lg:hidden grid grid-cols-2 gap-4 mb-6 font-circular-std">
        <button className="py-3 px-4 rounded-lg border border-gray-light-secondary text-black-secondary font-medium hover:bg-gray-50">
          Kirkland
        </button>
        <button className="py-3 px-4 rounded-lg border border-gray-light-secondary text-black-secondary font-medium hover:bg-gray-50">
          Seattle
        </button>
        <button className="py-3 px-4 rounded-lg border border-gray-light-secondary text-black-secondary font-medium hover:bg-gray-50">
          Bellevue
        </button>
        <button className="py-3 px-4 rounded-lg border border-gray-light-secondary text-black-secondary font-medium hover:bg-gray-50">
          Redmond
        </button>
        <button className="py-3 px-4 rounded-lg border border-gray-light-secondary text-black-secondary font-medium hover:bg-gray-50">
          Tacoma
        </button>
        <button className="py-3 px-4 rounded-lg border border-gray-light-secondary text-black-secondary font-medium hover:bg-gray-50">
          Everett
        </button>
        <button className="py-3 px-4 rounded-lg border border-gray-light-secondary text-black-secondary font-medium hover:bg-gray-50">
          Spokane
        </button>
        <button className="py-3 px-4 rounded-lg border border-gray-light-secondary text-gray-700 font-medium hover:bg-gray-50 flex items-center justify-center gap-1">
          Show More
          <span>
            <Image 
              src='/Image/arrow-down.png' 
              height={14} 
              width={14} 
              alt="down-arrow" 
              title="Show more locations"
              className="object-contain"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserReviews;