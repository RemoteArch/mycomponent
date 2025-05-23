import React from 'react';

const Breadcrumb = ({
  items,
  separator = '/',
  className = '',
}) => {
  return (
    <nav className={`flex ${className}`}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400 text-sm">
                {separator}
              </span>
            )}
            {index === items.length - 1 ? (
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
              >
                {item.icon && (
                  <span className="mr-2">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
