interface MetricCircleProps {
  value: number;
  label: string;
}

const MetricCircle = ({ value, label }: MetricCircleProps) => {
  // Calculate the stroke-dasharray and stroke-dashoffset for the circle
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (value / 5) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-14 h-14 mb-1">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="28"
            cy="28"
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
          <span className="text-base font-medium text-gray-800">{value}</span>
        </div>
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
};

export default MetricCircle; 