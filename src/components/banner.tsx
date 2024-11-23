import { useState } from "react";
import banner from "../assets/images/banner.png";
import SearchBar from "./search/search";
const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full relative">
      <img
        src={banner}
        alt=""
        className="mx-auto h-[420px] xl:h-[796px] w-full max-w-[1750px]"
      />
      <div className="absolute  xl:top-[200px] top-[40px] w-full px-6 xl:px-0 xl:max-w-[1154px] left-1/2 transform -translate-x-1/2 flex flex-col xl:gap-10  gap-6 ">
        <h2 className="text-white font-polySans font-semibold lg:text-[56px] text-[24px] lg:leading-[77.5px] leading-[33.22px] text-center">
          Explore Africa’s mining data with Interactive maps, legal insights,
          and real-time reports
        </h2>
        <p className="lg:text-[16px] text-[14px] xl:leading-[24px] leading-[21px] font-polySans font-normal text-center text-[#fff] max-w-[880px] mx-auto p-0 my-0">
          Our platform provides detailed mining data across Africa, offering
          interactive maps, legal insights, and real-time reports. Explore
          mining sites and stay informed with up-to-date information for all key
          stakeholders.
        </p>

        <SearchBar
          style="mx-auto"
          bg="bg-white"
          border="border border-[#F2F2F2]"
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default Banner;
