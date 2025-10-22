'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface Option {
  id: string;
  name: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  name,
  icon: Icon,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((opt) => opt.id === value) || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option.id);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selectedOption?.id || ''} />
      
      {/* Custom select button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="peer block w-full cursor-pointer rounded-md border border-halloween-purple-600 bg-halloween-black-700 text-halloween-orange-200 py-2 pl-10 pr-10 text-sm outline-2 text-left hover:bg-halloween-black-600 transition-colors"
      >
        <span className={clsx(selectedOption ? 'text-halloween-orange-200' : 'text-halloween-orange-400')}>
          {selectedOption ? selectedOption.name : placeholder}
        </span>
      </button>

      {/* Icon */}
      {Icon && (
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-halloween-orange-500" />
      )}

      {/* Dropdown arrow */}
      <ChevronDownIcon
        className={clsx(
          'pointer-events-none absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-halloween-orange-500 transition-transform',
          isOpen && 'rotate-180'
        )}
      />

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-halloween-purple-600 bg-halloween-black-700 shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelect(option)}
              className={clsx(
                'w-full text-left px-4 py-2 text-sm hover:bg-halloween-purple-700 transition-colors',
                selectedOption?.id === option.id
                  ? 'bg-halloween-purple-800 text-halloween-orange-300'
                  : 'text-halloween-orange-200'
              )}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

