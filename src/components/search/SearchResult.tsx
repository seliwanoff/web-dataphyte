import { useLocation } from "react-router-dom";
import SearchType from "./SearchType";

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "Default Title";
  return (
    <div className="w-full xl:px-[110px]  py-[32px] px-[24px]">
      <div className="max-w-[1750px] mx-auto overflow-x-auto parent-sroll">
        <div className="w-full   flex items-center">
          <div className="flex  gap-2 items-center text-nowrap">
            <span className="font-Poppins font-semibold text-[#202020] text-[20px] leading-6">
              “{queryName}”
            </span>{" "}
            <span className="font-Poppins font-normal text-[#202020] text-[20px]">
              search results:
            </span>
          </div>
          <div className="p-[10px] flex gap-[10px] items-center">
            <SearchType type="Minerals" count={30} />
            <SearchType type="Mining Type" count={30} />
            <SearchType type="People" count={100} />
            <SearchType type="Mining Site" count={40} />
            <SearchType type="Document " count={50} />
            <SearchType type="Companies" count={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
