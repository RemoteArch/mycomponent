import React from 'react';

const Sidebar = ({
  items = [],
  footer,
  collapsed = false,
  onCollapse,
  className = '',
}) => {
  return (
    <div 
      className={`
        flex flex-col
        bg-white border-r
        transition-all duration-300
        ${collapsed ? 'w-16' : 'w-64'}
        ${className}
      `}
    >
      {/* Collapse button */}
      {onCollapse && (
        <button
          onClick={onCollapse}
          className="p-4 flex items-center justify-center hover:bg-gray-50"
        >
          <svg
            className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
              collapsed ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1 p-2">
        {items.map((item, index) => {
          const isActive = item.active;
          
          return (
            <a
              key={index}
              href={item.href}
              className={`
                group flex items-center px-2 py-2 text-sm font-medium rounded-md
                ${isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
                <div className={`
                  flex-shrink-0 mr-3
                  ${collapsed ? 'mr-0 mx-auto' : ''}
                `}>
                  {item.icon}
                </div>
              )}
              {!collapsed && (
                <span className="flex-1">
                  {item.label}
                </span>
              )}
              {!collapsed && item.badge && (
                <span className={`
                  ml-3 inline-block py-0.5 px-2 text-xs rounded-full
                  ${isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                  }
                `}>
                  {item.badge}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      {footer && (
        <div className={`
          border-t p-4
          ${collapsed ? 'flex justify-center' : ''}
        `}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
