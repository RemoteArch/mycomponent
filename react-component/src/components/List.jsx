import React from 'react';

const List = ({
  variant = 'basic', // 'basic', 'divided', 'bordered'
  children,
  className = '',
}) => {
  const variantClasses = {
    basic: '',
    divided: '[&>*+*]:border-t [&>*]:py-3',
    bordered: 'border rounded-lg [&>*+*]:border-t [&>*]:p-3',
  };

  return (
    <div className={`
      ${variantClasses[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default List;
