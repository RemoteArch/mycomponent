import React from 'react';

const Radio = ({
  checked,
  onChange,
  label,
  name,
  value,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <label className={`inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
        disabled={disabled}
        className={`
          w-4 h-4 border-gray-300
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

export default Radio;
