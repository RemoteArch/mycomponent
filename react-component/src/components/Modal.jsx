import React, { useEffect } from 'react';

const Modal = ({
  isOpen,
  onClose,
  title,
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

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div 
            className={`
              relative transform overflow-hidden rounded-lg bg-white text-left 
              shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg
              ${className}
            `}
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              {title && (
                <div className="mb-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {title}
                  </h3>
                </div>
              )}
              <div className="mt-2">
                {children}
              </div>
            </div>
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
