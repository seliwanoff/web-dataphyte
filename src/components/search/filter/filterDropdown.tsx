import React, { useState } from "react";

interface FilterDropdownProps {
  title: string;
  options: string[];
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  width: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  options,
  selectedFilter,
  setSelectedFilter,
  width,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedFilter(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className={`relative inline-block  ${width}`}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      <div
        className="flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 cursor-pointer hover:shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-700">
          {selectedFilter || "Select an option"}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className={`px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 ${
                selectedFilter === option ? "bg-gray-200" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
