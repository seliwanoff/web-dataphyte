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
  return (
    <div className="border-b-2 border-[#CECECE] w-full xl:px-[110px] pt-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto overflow-x-auto parent-scroll">
        <ul className="flex text-nowrap items-center gap-[32px] xl:gap-[50px] flex-nowrap w-full list-none text-[#525252] font-Poppins font-normal leading-6 text-[16px] cursor-pointer">
          {filters.map((item) => (
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
