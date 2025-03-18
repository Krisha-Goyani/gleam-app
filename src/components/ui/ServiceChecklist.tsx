import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/types/types';


interface ServiceChecklistProps {
  className?: string;
}

const ServiceChecklist: React.FC<ServiceChecklistProps> = ({ className = '' }) => {
  const checklist = useSelector((state: RootState) => state.cleaning.checklist);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    'all-rooms': false,
    'bathrooms': false,
    'kitchen': false,
    'bedrooms': false,
    'extras': false
  });

  const sections = {
    'all-rooms': { title: 'All rooms', items: [] as typeof checklist },
    'bathrooms': { title: 'Bathrooms', items: [] as typeof checklist },
    'kitchen': { title: 'Kitchen', items: [] as typeof checklist },
    'bedrooms': { title: 'Bedroom (4)', items: [] as typeof checklist },
    'extras': { title: 'Extras', items: [] as typeof checklist }
  };

  // Organize items by section
  checklist.forEach(item => {
    sections[item.section].items.push(item);
  });

  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className={`font-circular-std ${className}`}>
      {Object.entries(sections).map(([sectionId, section]) => (
        <div key={sectionId} className="border-t first:border-t-0 border-gray-100">
          <button
            onClick={() => toggleSection(sectionId)}
            className="w-full py-3 flex items-center justify-between bg-white text-left group"
            aria-expanded={!collapsedSections[sectionId]}
          >
            <span className="text-base text-gray-900">{section.title}</span>
            <svg
              className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${
                collapsedSections[sectionId] ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`transition-all duration-200 overflow-hidden ${
              collapsedSections[sectionId] ? 'h-0 py-0' : 'h-auto py-2'
            }`}
          >
            <div className="space-y-2">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center"
                >
                  <div 
                    className={`w-4 h-4 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      item.isIncluded ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {item.isIncluded ? (
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                        <path 
                          d="M10 3L4.5 8.5L2 6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                        <path 
                          d="M9 3L3 9M3 3L9 9" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-gray-600">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceChecklist;
