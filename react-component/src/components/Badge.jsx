import React from 'react';

const Badge = ({
  content,
  variant = 'primary', // 'primary', 'secondary', 'success', 'danger', 'warning'
  size = 'md', // 'sm', 'md', 'lg'
  rounded = false,
  className = '',
  children,
}) => {
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1',
  };

  return (
    <span className={`
      inline-flex items-center font-medium
      ${rounded ? 'rounded-full' : 'rounded'}
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `}>
      {content || children}
    </span>
  );
};

export default Badge;
