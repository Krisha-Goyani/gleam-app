import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import type { RootState } from "@/types/types";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import Button from "@/components/Button";
import ShimmerLoader from "@/components/common/ShimmerLoader";

const UserReviews = () => {
  const dispatch = useDispatch();
  const { userReviews, displayedReviews } = useSelector(
    (state: RootState) => state.reviews
  );

  const visibleReviews = userReviews.slice(0, displayedReviews);
  const hasMoreReviews = userReviews.length > displayedReviews;
  const isExpanded = displayedReviews > 3;
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = async () => {
    setIsLoading(true);
    // Simulate loading time first
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Then dispatch the action to show more reviews
    dispatch({ type: "reviews/showMoreReviews" });
    setIsLoading(false);
  };

  const handleShowLess = () => {
    dispatch({ type: "reviews/showLessReviews" });
  };

  const locations = [
    "Kirkland",
    "Seattle",
    "Bellevue",
    "Redmond",
    "Tacoma",
    "Everett",
    "Spokane",
    {
      text: "Show More",
      icon: "/Image/arrow-down.png",
      isSpecial: true
    }
  ];

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
        {isLoading && <ShimmerLoader />}
      </div>
      <div className="md:mt-4 mb-10">
        {hasMoreReviews && (
          <button
            onClick={handleShowMore}
            className="text-blue-primary hover:text-blue-700 text-base font-circular-std font-normal"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Show more reviews'}
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

      <h2 className="md-lg:hidden text-lg font-medium text-black-secondary mb-4 font-circular-std">
        Best cleaning services in and around Washington
      </h2>
      <div className="md-lg:hidden grid grid-cols-2 gap-4 mb-6 font-circular-std">
        {locations.map((location, index) => (
          <Button
            key={typeof location === 'string' ? location : index}
            text={
              typeof location === 'string' ? (
                location
              ) : (
                <div className="flex items-center justify-center gap-1">
                  {location.text}
                  <span>
                    <Image
                      src={location.icon}
                      height={14}
                      width={14}
                      alt="down-arrow"
                      title="Show more locations"
                      className="object-contain"
                    />
                  </span>
                </div>
              )
            }
            className="py-3 px-4 rounded-lg border border-gray-light-secondary text-black-secondary font-medium hover:bg-gray-50"
          />
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
