import React from 'react';

const Switch = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <label className={`inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <div
          className={`
            w-10 h-6 rounded-full transition-colors
            ${checked ? 'bg-blue-600' : 'bg-gray-200'}
            ${disabled ? 'opacity-50' : ''}
          `}
        />
        <div
          className={`
            absolute left-0.5 top-0.5
            w-5 h-5 bg-white rounded-full transition-transform
            ${checked ? 'translate-x-4' : 'translate-x-0'}
          `}
        />
      </div>
      {label && (
        <span className={`ml-3 ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Switch;
