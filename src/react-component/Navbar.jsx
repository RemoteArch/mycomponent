import React, { useState } from 'react';

const Navbar = ({
  brand,
  items = [],
  rightItems = [],
  sticky = false,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      className={`
        bg-white shadow-sm
        ${sticky ? 'sticky top-0 z-50' : ''}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Brand/Logo */}
            {brand && (
              <div className="flex-shrink-0 flex items-center">
                {typeof brand === 'string' ? (
                  <span className="text-lg font-semibold text-gray-900">
                    {brand}
                  </span>
                ) : (
                  brand
                )}
              </div>
            )}

            {/* Desktop Navigation Items */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`
                    inline-flex items-center px-1 pt-1 text-sm font-medium
                    ${item.active
                      ? 'border-b-2 border-blue-500 text-gray-900'
                      : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700'
                    }
                  `}
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
              ))}
            </div>
          </div>

          {/* Right Side Items */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {rightItems.map((item, index) => (
              <div key={index} className="ml-3">
                {item}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`
                block pl-3 pr-4 py-2 text-base font-medium
                ${item.active
                  ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300 hover:text-gray-800'
                }
              `}
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
          ))}
        </div>
        {rightItems.length > 0 && (
          <div className="pt-4 pb-3 border-t border-gray-200">
            {rightItems.map((item, index) => (
              <div key={index} className="px-4">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
