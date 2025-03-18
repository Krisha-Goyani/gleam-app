interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="py-6 border-b border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-100 px-2 py-1 rounded-md flex items-center">
            <span className="text-sm font-medium">★ {review.rating}</span>
          </div>
          <h3 className="font-medium text-gray-900">{review.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-gray-500">
            <img src="/like-icon.svg" alt="Like" className="w-4 h-4" />
            <span>({review.likes})</span>
          </button>
          <button className="flex items-center gap-1 text-gray-500">
            <img src="/dislike-icon.svg" alt="Dislike" className="w-4 h-4" />
            <span>({review.dislikes})</span>
          </button>
          <button>
            <img src="/caution-icon.svg" alt="Report" className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 mb-3">{review.description}</p>
      
      {review.images && (
        <div className="flex gap-2 mb-3">
          {review.images.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`Review ${index + 1}`}
              className="w-20 h-20 rounded-lg object-cover"
            />
          ))}
        </div>
      )}
      
      <div className="flex items-center text-sm text-gray-500">
        <span>{review.author}</span>
        <span className="mx-2">•</span>
        <span>{review.timeAgo}</span>
      </div>
    </div>
  );
};

export default ReviewCard; 