import React from "react";

interface SearchFilterProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  filters: string[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  currentTab,
  setCurrentTab,
  filters,
}) => {
  // Generate random counts for all items except the first one
  const counts = filters.map((_, index) =>
    index === 0 ? null : Math.floor(Math.random() * 15) + 1
  );

  return (
    <div className="border-b-2 border-[#CECECE] w-full xl:px-[110px] pt-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto overflow-x-auto parent-scroll">
        <ul className="flex text-nowrap items-center gap-[32px] xl:gap-[50px] flex-nowrap w-full list-none text-[#525252] font-Poppins font-normal leading-6 text-[16px] cursor-pointer">
          {filters.map((item, index) => (
            <li
              key={item}
              className={`${
                currentTab === item
                  ? "font-semibold border-b-2 border-[#7F55DA]"
                  : ""
              }`}
              onClick={() => setCurrentTab(item)}
            >
              {item}
              {index !== 0 && (
                <span className="p-[2px] bg-[#f2f4f7] rounded-[3px] text-[#344054] font-Inter font-medium ml-1">
                  {counts[index]}
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
