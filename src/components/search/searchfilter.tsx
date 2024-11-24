import React from "react";

interface FilterType {
  type: string;
  count: number;
}

interface SearchFilterProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  filters: FilterType[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  currentTab,
  setCurrentTab,
  filters,
}) => {
  return (
    <div className="border-b-2 border-[#CECECE] w-full xl:px-[110px] pt-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto overflow-x-auto parent-scroll">
        <ul className="flex text-nowrap items-center gap-[32px] xl:gap-[50px] flex-nowrap w-full list-none text-[#525252] font-Poppins font-normal leading-6 text-[16px] cursor-pointer">
          {filters.map((filter) => (
            <li
              key={filter.type}
              className={`${
                currentTab === filter.type
                  ? "font-semibold border-b-2 border-[#7F55DA]"
                  : ""
              }`}
              onClick={() => filter.count > 0 && setCurrentTab(filter.type)} // Conditionally handle click
              style={{
                cursor: filter.count === 0 ? "not-allowed" : "pointer", // Disable cursor for zero count
                opacity: filter.count === 0 ? 0.5 : 1, // Make zero count items look disabled
              }}
            >
              {filter.type}
              {filter.type !== "All" && (
                <span className="p-[2px] bg-[#f2f4f7] rounded-[3px] text-[#344054] font-Inter font-medium ml-1">
                  {filter.count}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
