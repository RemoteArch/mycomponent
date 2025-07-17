import React, { useState } from 'react';

const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
  className = '',
}) => {
  return (
    <div className={`border-b ${className}`}>
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-left"
        onClick={onToggle}
      >
        <span className="text-sm font-medium text-gray-900">
          {title}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-200 ease-in-out
          ${isOpen ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <div className="p-6 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({
  items,
  multiple = false,
  className = '',
}) => {
  const [openItems, setOpenItems] = useState(
    multiple ? [] : null
  );

  const handleToggle = (index) => {
    if (multiple) {
      setOpenItems((current) =>
        current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index]
      );
    } else {
      setOpenItems(openItems === index ? null : index);
    }
  };

  const isItemOpen = (index) =>
    multiple
      ? openItems.includes(index)
      : openItems === index;

  return (
    <div className={`border rounded-lg divide-y ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={isItemOpen(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
