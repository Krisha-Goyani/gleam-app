import { useSelector } from "react-redux";
import type { RootState } from "@/types/types";
import RatingBar from "./RatingBar";
import MetricCircle from "./MetricCircle";
import { formatNumber } from "@/utils/formatters";

const ServiceReviews = () => {
  const reviews = useSelector((state: RootState) => state.reviews);

  return (
    <div className="bg-white">
      <div className="h-2 bg-red-200 mt-2 mb-10"> </div>
      <h2 className="text-lg font-bold text-black-secondary  mb-8">
        Service Reviews
      </h2>
      <div className="flex flex-col md:flex-row gap-20">
        {/* Left section - Rating distribution */}
        <div className="flex gap-9">
          <div className="flex flex-col items-center gap-3 w-24">
            <span className="text-2xl text-black-secondary font-bold ">
              {reviews.averageRating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-600">
              <span>
                {formatNumber(reviews.totalRatings)} Ratings &<br />
              </span>
              {reviews.totalReviews.toLocaleString()} Reviews
            </span>
          </div>

          <div className="w-64">
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
        <div className="xs:hidden md:block md:w-[751px]">
          <div className="flex flex-col md:flex-row justify-between">
            <MetricCircle
              value={reviews.serviceMetrics.quality}
              label="Quality"
            />
            <MetricCircle
              value={reviews.serviceMetrics.onTime}
              label="On Time"
            />
            <MetricCircle
              value={reviews.serviceMetrics.cleanliness}
              label="Cleanliness"
            />
            <MetricCircle
              value={reviews.serviceMetrics.onTime}
              label="On time"
            />
            <MetricCircle
              value={reviews.serviceMetrics.cleanliness}
              label="Cleanliness"
            />
          </div>
        </div>
        <div className="md:hidden w-[300px] md:w-[751px]">
          <div className="flex flex-col md:flex-row ">
            <div className="flex max-w-[722px] w-full justify-between ">
              <MetricCircle
                value={reviews.serviceMetrics.quality}
                label="Quality"
              />
              <MetricCircle
                value={reviews.serviceMetrics.onTime}
                label="On Time"
              />
              <MetricCircle
                value={reviews.serviceMetrics.cleanliness}
                label="Cleanliness"
              />
            </div>
            <div className=" flex max-w-[722px] w-full justify-evenly md:justify-between">
              <MetricCircle
                value={reviews.serviceMetrics.onTime}
                label="On time"
              />
              <MetricCircle
                value={reviews.serviceMetrics.cleanliness}
                label="Cleanliness"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReviews;
