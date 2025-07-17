import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({
  trigger,
  items = [],
  position = 'bottom-left', // 'bottom-left', 'bottom-right', 'top-left', 'top-right'
  width = 'w-48',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const positionClasses = {
    'bottom-left': 'top-full left-0',
    'bottom-right': 'top-full right-0',
    'top-left': 'bottom-full left-0',
    'top-right': 'bottom-full right-0',
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className={`
          absolute z-50 mt-2
          ${positionClasses[position]}
          ${width}
          ${className}
        `}>
          <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu">
              {items.map((item, index) => {
                if (item.divider) {
                  return <hr key={index} className="my-1 border-gray-200" />;
                }

                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`
                      ${item.disabled
                        ? 'cursor-not-allowed opacity-50'
                        : 'cursor-pointer hover:bg-gray-100'
                      }
                      group flex items-center px-4 py-2 text-sm text-gray-700
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!item.disabled && item.onClick) {
                        item.onClick();
                        setIsOpen(false);
                      }
                    }}
                    role="menuitem"
                  >
                    {item.icon && (
                      <span className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                    {item.endIcon && (
                      <span className="ml-auto pl-3 text-gray-400 group-hover:text-gray-500">
                        {item.endIcon}
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
