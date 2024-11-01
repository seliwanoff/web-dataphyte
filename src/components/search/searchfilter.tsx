import { useState } from "react";

const SearchFilter = () => {
  const [active, setIsActive] = useState(0);
  const Filters = [
    "All",
    "Minerals",
    "Mining Type",
    "People",
    "Mining Site",
    "Document",
    "Companies",
  ];
  return (
    <div className="border-b-2 border-[#CECECE] w-full xl:px-[110px] pt-[32px] px-[24px] ">
      <div className="w-full mx-auto overflow-x-auto parent-sroll">
        <ul className="flex text-nowrap items-center gap-[32px] xl:gap-[50px] flex-nowrap w-full list-none text-[#525252] font-Poppins font-normal leading-6 text-[16px] cursor-pointer">
          {Filters.map((item, index) => (
            <li
              key={index}
              className={`  ${
                active === index
                  ? "font-semibold border-b-2 border-[#7F55DA]"
                  : ""
              } `}
              onClick={() => setIsActive(index)}
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
