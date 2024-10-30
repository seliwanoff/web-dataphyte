import banner from "../assets/images/banner.png";
import search from "../assets/images/search-normal.png";
const Banner = () => {
  return (
    <div className="w-full relative">
      <img
        src={banner}
        alt=""
        className="mx-auto h-[896px] w-full max-w-[1519px]"
      />
      <div className="absolute top-[284px] w-full  max-w-[1154px] left-1/2 transform -translate-x-1/2 flex flex-col gap-10 ">
        <h2 className="text-white font-polySans font-semibold text-[56px] leading-[70px] text-center">
          Explore Africa’s mining data with Interactive maps, legal insights,
          and real-time reports
        </h2>
        <p className="text-[16px] leading-4 font-polySans font-normal text-center text-[#fff] max-w-[880px] mx-auto p-0 my-0">
          Our platform provides detailed mining data across Africa, offering
          interactive maps, legal insights, and real-time reports. Explore
          mining sites and stay informed with up-to-date information for all key
          stakeholders.
        </p>
        <div className="py-[6px] pl-6 bg-white rounded-[46px] border border-[#F2F2F2] shadow h-[52px] w-[577px] mx-auto flex gap-[10px] items-center ">
          <input
            type="text"
            className="outline-none border-none text-[#828282] text-[14px] leading-6 font-normal font-Poppins w-3/4"
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
