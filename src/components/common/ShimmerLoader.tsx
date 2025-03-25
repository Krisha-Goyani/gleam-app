const ShimmerLoader = ({ variant = 'default' }) => {
  if (variant === 'button') {
    return (
      <>      
      <div className="grid  gap-4 w-full">      
      <div className="py-3 px-4 rounded-lg border border-gray-light-secondary animate-pulse bg-gray-200 w-full h-11 md-lg:h-14">
        <div className="h-full w-full bg-gray-300  rounded"></div>
      </div>
      </div>
      <div className="py-3 px-4 rounded-lg border border-gray-light-secondary animate-pulse bg-gray-200  w-full h-11 md-lg:h-14">
        <div className="h-full w-full bg-gray-300  rounded"></div>
      </div>
      </>
    );
  }

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