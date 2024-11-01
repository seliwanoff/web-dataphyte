import React from "react";

interface SearchTypeProps {
  type: string;
  count: number;
}

const SearchType: React.FC<SearchTypeProps> = ({ type, count }) => {
  return (
    <div className="border justify-center text-center min-w-[130px] border-[#D0D5DD] bg-white rounded-md py-[2px] px-[4px] font-Inter font-medium text-[14px] leading-6 text-gray-700 flex gap-[4px] items-center">
      <span>{type}</span>
      <span className="p-[2px] bg-[#f2f4f7] rounded-[3px] text-[#344054] font-Inter font-medium">
        {count}
      </span>
    </div>
  );
};

export default SearchType;
