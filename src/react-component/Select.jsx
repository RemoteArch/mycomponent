import React from 'react';

const Select = ({
  options = [],
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  className = '',
  ...props
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        w-full px-4 py-2 border rounded-md appearance-none
        bg-white
        focus:outline-none focus:ring-2 focus:ring-blue-500
        disabled:bg-gray-100 disabled:cursor-not-allowed
        ${error ? 'border-red-500' : 'border-gray-300'}
        ${className}
      `}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
