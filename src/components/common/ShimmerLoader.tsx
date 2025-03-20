const ShimmerLoader = () => {
  return (
    <div className="animate-pulse space-y-4 pt-6">
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 h-6 w-16 rounded-md"></div>
          <div className="bg-gray-200 h-6 w-40 rounded"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 h-6 w-16 rounded"></div>
          <div className="bg-gray-200 h-6 w-16 rounded"></div>
          <div className="bg-gray-200 h-6 w-8 rounded"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="bg-gray-200 h-4 w-full rounded"></div>
        <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
      </div>
      <div className="flex gap-2">
        <div className="bg-gray-200 h-4 w-20 rounded"></div>
        <div className="bg-gray-200 h-4 w-20 rounded"></div>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-200 h-16 w-16 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerLoader;