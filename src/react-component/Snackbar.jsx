import React, { useEffect, useState } from 'react';

const Snackbar = ({
  message,
  action,
  onActionClick,
  duration = 5000,
  onClose,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4
      transform transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      ${className}
    `}>
      <div className="flex items-center justify-between w-full max-w-sm bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg">
        <p className="text-sm font-medium mr-8">
          {message}
        </p>
        <div className="flex items-center space-x-4 ml-auto">
          {action && (
            <button
              onClick={() => {
                onActionClick?.();
                setIsVisible(false);
                onClose?.();
              }}
              className="text-sm font-medium uppercase text-blue-400 hover:text-blue-300 focus:outline-none"
            >
              {action}
            </button>
          )}
          <button
            onClick={() => {
              setIsVisible(false);
              onClose?.();
            }}
            className="text-gray-400 hover:text-gray-300 focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
