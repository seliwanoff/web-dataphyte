import banner from "../assets/images/banner.png";
import search from "../assets/images/search-normal.png";
const Banner = () => {
  return (
    <div className="w-full relative">
      <img
        src={banner}
        alt=""
        className="mx-auto h-[420px] xl:h-[796px] w-full max-w-[1750px]"
      />
      <div className="absolute  xl:top-[284px] top-[40px] w-full px-6 xl:px-0 xl:max-w-[1154px] left-1/2 transform -translate-x-1/2 flex flex-col xl:gap-10  gap-6 ">
        <h2 className="text-white font-polySans font-semibold lg:text-[56px] text-[24px] lg:leading-[70px] leading-[33.22px] text-center">
          Explore Africa’s mining data with Interactive maps, legal insights,
          and real-time reports
        </h2>
        <p className="lg:text-[16px] text-[14px] xl:leading-4 leading-[21px] font-polySans font-normal text-center text-[#fff] max-w-[880px] mx-auto p-0 my-0">
          Our platform provides detailed mining data across Africa, offering
          interactive maps, legal insights, and real-time reports. Explore
          mining sites and stay informed with up-to-date information for all key
          stakeholders.
        </p>
        <div className="xl:py-[6px]  py-[3.54]  pl-6 bg-white rounded-[46px] border border-[#F2F2F2] shadow xl:h-[52px]  w-full xl:max-w-[577px] mx-auto flex gap-[10px] items-center ">
          <input
            type="text"
            className="outline-none border-none text-[#828282] text-[14px] leading-6 font-normal font-Poppins xl:w-3/4 w-full"
            placeholder="Search minerals, mining sites, Documents"
          />
          <button
            className="bg-[#7F55DA] h-full py-2 px-6 rounded-[26px] text-[#fff] text-[14px] leading-6 font-normal flex items-center justify-center font-Poppins
]"
          >
            <img src={search} alt="" className="h-[18px] mr-1" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
