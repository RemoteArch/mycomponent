import React, { useEffect } from 'react';

const Drawer = ({
  isOpen,
  onClose,
  position = 'right', // 'left', 'right', 'top', 'bottom'
  children,
  className = '',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const positionClasses = {
    left: 'left-0 h-full transform -translate-x-full',
    right: 'right-0 h-full transform translate-x-full',
    top: 'top-0 w-full transform -translate-y-full',
    bottom: 'bottom-0 w-full transform translate-y-full',
  };

  const sizeClasses = {
    left: 'w-[300px]',
    right: 'w-[300px]',
    top: 'h-[300px]',
    bottom: 'h-[300px]',
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      <div 
        className={`
          fixed bg-white z-50 transition-transform duration-300 ease-in-out
          ${positionClasses[position]}
          ${sizeClasses[position]}
          ${isOpen ? 'translate-x-0 translate-y-0' : ''}
          ${className}
        `}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
        <div className="h-full overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
