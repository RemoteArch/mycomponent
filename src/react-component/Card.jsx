import React from 'react';

const Card = ({
  title,
  subtitle,
  children,
  image,
  footer,
  hover = false,
  className = '',
}) => {
  return (
    <div className={`
      bg-white rounded-lg shadow-md overflow-hidden
      ${hover ? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg' : ''}
      ${className}
    `}>
      {image && (
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        {(title || subtitle) && (
          <div className="mb-4">
            {title && (
              <h3 className="text-xl font-semibold text-gray-800">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="text-gray-700">
          {children}
        </div>
      </div>
      {footer && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
