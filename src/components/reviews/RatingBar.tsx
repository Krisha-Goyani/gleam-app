interface RatingBarProps {
  rating: number;
  count: number;
  total: number;
}

const RatingBar = ({ rating, count, total }: RatingBarProps) => {
  const percentage = (count / total) * 100;
  
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center w-12">
        <span className="text-gray-600">{rating}</span>
        <span className="ml-1">★</span>
      </div>
      <div className="flex-1 h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-gray-800 rounded-full" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="w-16 text-right text-gray-600">{count}</span>
    </div>
  );
};

export default RatingBar; 