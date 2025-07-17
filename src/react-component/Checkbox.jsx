import React from 'react';

const Checkbox = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <label className={`inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-4 h-4 rounded border-gray-300
          text-blue-600
          focus:ring-blue-500
          disabled:opacity-50
        `}
        {...props}
      />
      {label && (
        <span className={`ml-2 ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
