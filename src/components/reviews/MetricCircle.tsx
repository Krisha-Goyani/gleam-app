interface MetricCircleProps {
  value: number;
  label: string;
}

const MetricCircle = ({ value, label }: MetricCircleProps) => {
  // Calculate the stroke-dasharray and stroke-dashoffset for the circle
  const radius = 35;  // Increased radius for larger circle
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (value / 5) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 mb-1">  {/* Updated to 85px */}
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="40"  // Centered at 85/2
            cy="40"  // Centered at 85/2
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="40"  // Centered at 85/2
            cy="40"  // Centered at 85/2
            r={radius}
            stroke="#374151"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: progressOffset,
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base font-medium text-gray-800">
            {value.toFixed(1)}  {/* Format to show one decimal place */}
          </span>
        </div>
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
};

export default MetricCircle;