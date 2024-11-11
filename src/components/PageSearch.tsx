import search from "../assets/images/search-lg.png";
const PageSearch = () => {
  return (
    <div className="w-full max-w-[320px] h-[44px] flex items-center gap-[14px] border border-[#d0d5dd] rounded-md py-[10px] px-[14px] ">
      <img src={search} alt="" className="h-[20px]" />

      <input
        type="search"
        className="w-full outline-none bg-inherit h-full font-Inter text-[16px] leading-6 text-[#667085] "
        placeholder="Search"
      />
    </div>
  );
};

export default PageSearch;