import SearchBar from "../components/search/search";
import filter from "../assets/images/filter-lines.png";

const SearchWrapper = () => {
  return (
    <div className="w-full px-[110px] py-[32px]">
      <div className="w-full max-w-[1750px] justify-between items-center  flex ">
        <SearchBar style="" bg="bg-[#f0f0f0]" border="border border-[#ccc]" />
        <div className="border border-[#D0D5DD] shadow-custom-light rounded-md py-[10px] cursor-pointer px-[24px] flex justify-center items-center gap-[10px]">
          <img src={filter} alt="" className="h-[20px]" />

          <span className="text-[#344054] font-semibold text-[16px] leading-6 font-Inter">
            Search
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchWrapper;
