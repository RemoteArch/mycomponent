import React from 'react';

const ListItem = ({
  leading,
  trailing,
  title,
  subtitle,
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseClasses = `
    flex items-center gap-4
    ${onClick ? 'cursor-pointer hover:bg-gray-50' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  return (
    <div
      onClick={!disabled && onClick ? onClick : undefined}
      className={`${baseClasses} ${className}`}
    >
      {leading && (
        <div className="flex-shrink-0">
          {leading}
        </div>
      )}
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-medium text-gray-900 truncate">
            {title}
          </p>
        )}
        {subtitle && (
          <p className="text-sm text-gray-500 truncate">
            {subtitle}
          </p>
        )}
      </div>
      {trailing && (
        <div className="flex-shrink-0">
          {trailing}
        </div>
      )}
    </div>
  );
};

export default ListItem;
