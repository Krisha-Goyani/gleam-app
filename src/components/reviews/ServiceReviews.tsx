import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import RatingBar from './RatingBar';
import MetricCircle from './MetricCircle';

const ServiceReviews = () => {
  const reviews = useSelector((state: RootState) => state.reviews);
  
  return (
    <div className="bg-white p-6 ">
      <h2 className="bg-white text-lg font-medium text-gray-900 mb-4">Service Reviews</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left section - Rating distribution */}
        <div className="w-full md:w-1/3">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-medium text-gray-900">{reviews.averageRating}</span>
            <span className="text-sm text-gray-600">
              {reviews.totalRatings.toLocaleString()} Ratings &<br />
              {reviews.totalReviews.toLocaleString()} Reviews
            </span>
          </div>
          
          <div className="space-y-2">
            {reviews.ratingDistribution.map((item) => (
              <RatingBar
                key={item.rating}
                rating={item.rating}
                count={item.count}
                total={reviews.totalRatings}
              />
            ))}
          </div>
        </div>
        
        {/* Right section - Service metrics */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-5 gap-4">
            <MetricCircle value={reviews.serviceMetrics.quality} label="Quality" />
            <MetricCircle value={reviews.serviceMetrics.onTime} label="On Time" />
            <MetricCircle value={reviews.serviceMetrics.cleanliness} label="Cleanliness" />
            <MetricCircle value={reviews.serviceMetrics.onTime} label="On time" />
            <MetricCircle value={reviews.serviceMetrics.cleanliness} label="Cleanliness" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReviews; 