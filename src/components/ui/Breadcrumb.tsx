import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 font-circular-std text-sm">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && (
            <span className="text-gray-400">/</span>
          )}
          <a
            href={item.href}
            className={`transition-colors ${
              index === items.length - 1
                ? 'text-gray-700'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {item.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
