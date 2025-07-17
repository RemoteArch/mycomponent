import React from 'react';

const Textarea = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  error,
  className = '',
  ...props
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`
        w-full px-4 py-2 border rounded-md resize-y
        focus:outline-none focus:ring-2 focus:ring-blue-500
        disabled:bg-gray-100 disabled:cursor-not-allowed
        ${error ? 'border-red-500' : 'border-gray-300'}
        ${className}
      `}
      {...props}
    />
  );
};

export default Textarea;
