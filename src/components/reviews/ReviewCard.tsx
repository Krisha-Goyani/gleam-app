import type { Review } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

interface ReviewCardProps {
  review: Review;
  isLast?: boolean;
}

const ReviewCard = ({ review, isLast = false }: ReviewCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pt-6 ">
      <div className={`${!isLast ? 'border-b border-gray-light-secondary' : ''} pb-3`}>
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-secondary px-1.5 py-0.5 rounded-md flex items-center">
              <span className="text-sm font-medium flex items-center gap-1">
                <Image
                  src="/Image/star.png"
                  alt="Star"
                  title="star"
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
                {review.rating}
              </span>
            </div>
            <h3 className="font-circular-std text-sm md:text-base font-medium text-black-secondary">
              {review.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-gray-500">
              <Image src="/Image/like.png" title="like" alt="Like" width={14} height={12} />
              <span className="font-circular-std text-base">
                ({review.likes})
              </span>
            </button>
            <button className="flex items-center gap-1 text-gray-500">
              <Image
                src="/Image/dislike.png"
                alt="Dislike"
                title="dislike"
                width={14}
                height={12}
              />
              <span>({review.dislikes})</span>
            </button>
            <button>
              <Image
                src="/Image/caution.png"
                alt="Report"
                title="Report"
                width={14}
                height={12}
              />
            </button>
          </div>
        </div>

        <p className="text-sm font-circular-std text-black-secondary font-normal mb-1">
          {isExpanded
            ? review.description
            : review.description.length > 150
            ? `${review.description.slice(0, 150)}...`
            : review.description
          }
          {review.description.length > 150 && (
            <button 
              className="text-blue-primary font-circular-std ml-1 hover:underline cursor-pointer inline-block"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'See less' : 'See more'}
            </button>
          )}
        </p>

        <div className="flex items-center text-sm text-gray-light-tertary mb-3">
          <span>{review.author}</span>
          <span className="mx-2">•</span>
          <span>{review.timeAgo}</span>
        </div>

        {review.images && (
          <div className="flex gap-2">
            {review.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                title="Review"
                alt={`Review ${index + 1}`}
                width={70}
                height={70}
                className="rounded-lg object-cover mb-3"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
