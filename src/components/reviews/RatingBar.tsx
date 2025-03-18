interface RatingBarProps {
  rating: number;
  count: number;
  total: number;
}

const RatingBar = ({ rating, count }: RatingBarProps) => {
  const getBarWidth = (rating: number): number => {
    const widths: Record<number, number> = {
      5: 107,
      4: 77,
      3: 57,
      2: 38,
      1: 17
    };
    return widths[rating] ?? 0;
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex items-center gap-1">
        <span className="text-gray-600">{rating}</span>
        <span className="ml-1">★</span>
      </div>
      <div className="flex-1 h-1 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-gray-800 rounded-full" 
          style={{ width: `${getBarWidth(rating)}px` }}
        />
      </div>
      <span className="w-8 text-left text-gray-600">{count}</span>
    </div>
  );
};

export default RatingBar;