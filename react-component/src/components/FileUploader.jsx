import React, { useCallback, useState } from 'react';

const FileUploader = ({
  onFileSelect,
  accept,
  multiple = false,
  maxSize = 5242880, // 5MB
  className = '',
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave' || e.type === 'drop') {
      setIsDragging(false);
    }
  }, [disabled]);

  const validateFile = useCallback((file) => {
    if (maxSize && file.size > maxSize) {
      setError(`File size should not exceed ${maxSize / 1024 / 1024}MB`);
      return false;
    }
    if (accept && !accept.split(',').some(type => file.type.match(type.trim()))) {
      setError('File type not accepted');
      return false;
    }
    return true;
  }, [accept, maxSize]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    
    setError('');
    setIsDragging(false);

    const files = Array.from(e.dataTransfer?.files || e.target.files);
    const validFiles = files.filter(validateFile);
    
    if (validFiles.length) {
      onFileSelect(multiple ? validFiles : validFiles[0]);
    }
  }, [disabled, multiple, onFileSelect, validateFile]);

  return (
    <div className={className}>
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg p-6
          flex flex-col items-center justify-center
          transition-colors
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-blue-500'}
        `}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleDrop}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
        />
        <svg
          className="w-10 h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop files here, or click to select files
        </p>
        {accept && (
          <p className="mt-1 text-xs text-gray-500">
            Allowed files: {accept}
          </p>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FileUploader;
