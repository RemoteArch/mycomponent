import React from 'react';

const Avatar = ({
  src,
  alt,
  size = 'md', // 'xs', 'sm', 'md', 'lg', 'xl'
  shape = 'circle', // 'circle', 'square'
  status, // 'online', 'offline', 'away', 'busy'
  className = '',
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  };

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            object-cover
            ${shape === 'circle' ? 'rounded-full' : 'rounded-lg'}
            ${sizeClasses[size]}
            ${className}
          `}
        />
      ) : (
        <div className={`
          flex items-center justify-center
          bg-gray-200 text-gray-600 font-medium
          ${shape === 'circle' ? 'rounded-full' : 'rounded-lg'}
          ${sizeClasses[size]}
          ${className}
        `}>
          {getInitials(alt)}
        </div>
      )}
      {status && (
        <span className={`
          absolute bottom-0 right-0
          block rounded-full ring-2 ring-white
          ${statusColors[status]}
          ${size === 'xs' ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5'}
        `} />
      )}
    </div>
  );
};

export default Avatar;
