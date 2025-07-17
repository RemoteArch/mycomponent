import React from 'react';

const Tabs = ({
  tabs,
  activeTab,
  onChange,
  variant = 'default', // 'default', 'pills', 'underline'
  fullWidth = false,
  className = '',
}) => {
  const variants = {
    default: 'border-b border-gray-200',
    pills: 'space-x-2',
    underline: 'border-b border-gray-200',
  };

  const tabStyles = {
    default: `
      px-4 py-2 font-medium text-sm
      border-b-2 -mb-px
      hover:text-gray-700
      focus:outline-none focus:border-blue-500
    `,
    pills: `
      px-4 py-2 font-medium text-sm rounded-full
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    `,
    underline: `
      px-4 py-2 font-medium text-sm
      border-b-2 -mb-px
      hover:text-gray-700
      focus:outline-none
    `,
  };

  const getTabStyle = (isActive) => {
    const baseStyle = tabStyles[variant];
    const activeStyle = {
      default: 'border-blue-500 text-blue-600',
      pills: 'bg-blue-50 text-blue-600',
      underline: 'border-blue-500 text-blue-600',
    };
    const inactiveStyle = {
      default: 'border-transparent text-gray-500 hover:border-gray-300',
      pills: 'text-gray-500 hover:text-gray-700 hover:bg-gray-50',
      underline: 'border-transparent text-gray-500 hover:border-gray-300',
    };

    return `${baseStyle} ${isActive ? activeStyle[variant] : inactiveStyle[variant]}`;
  };

  return (
    <div className={className}>
      <div className={`${variants[variant]} ${fullWidth ? 'flex' : 'inline-flex'}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              ${getTabStyle(activeTab === tab.id)}
              ${fullWidth ? 'flex-1 text-center' : ''}
            `}
          >
            {tab.icon && (
              <span className="mr-2">
                {tab.icon}
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
