import React, { useState } from 'react';

const Tooltip = ({
  content,
  position = 'top', // 'top', 'bottom', 'left', 'right'
  children,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 -translate-y-2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 translate-y-2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 -translate-x-2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 translate-x-2 ml-2',
  };

  const arrowClasses = {
    top: 'bottom-[-6px] left-1/2 -translate-x-1/2 border-t-gray-700 border-l-transparent border-r-transparent border-b-transparent',
    bottom: 'top-[-6px] left-1/2 -translate-x-1/2 border-b-gray-700 border-l-transparent border-r-transparent border-t-transparent',
    left: 'right-[-6px] top-1/2 -translate-y-1/2 border-l-gray-700 border-t-transparent border-b-transparent border-r-transparent',
    right: 'left-[-6px] top-1/2 -translate-y-1/2 border-r-gray-700 border-t-transparent border-b-transparent border-l-transparent',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div 
          className={`
            absolute z-50 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-sm text-white
            ${positionClasses[position]}
            ${className}
          `}
        >
          {content}
          <div 
            className={`
              absolute w-0 h-0
              border-4
              ${arrowClasses[position]}
            `}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
