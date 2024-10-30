import d1 from "../assets/images/d1.png";
import d2 from "../assets/images/d2.png";
import d21 from "../assets/images/d21.png";
import d3 from "../assets/images/d3.png";
import d4 from "../assets/images/d5.png";

const Section4 = () => {
  return (
    <div className="bg-custom-gradient px-[110px] py-[56px] flex justify-center flex-col">
      <div className="flex  justify-between w-full max-w-[1221px] mx-auto">
        <h3 className="font-semibold text-[40px] leading-[55.36px] font-polySans text-white max-w-[562px]">
          Quality Mineral Services with JET Minerals
        </h3>

        <div className="flex  flex-col gap-[23.66px] w-full max-w-[530px] justify-start">
          <p className="font-Satoshi font-normal text-white leading-[25.55px] text-[18.93px]">
            Our platform provides detailed mining data across Africa, offering
            interactive maps, legal insights, and real-time reports. Explore
            mining sites and stay informed with up-to-date information for all
            key stakeholders.
          </p>
          <button className="w-full max-w-[171px] border-2 border-[#6d6d6d] py-[12.93] px-[18.03px] rounded-[33.8px] text-[18.93] font-Satoshi leading-[25.33px] font-bold h-[47.32px] bg-[#1E1E1E] text-white ">
            Find out more
          </button>
        </div>
      </div>
      <div className="text-white mt-[72px] w-full max-w-[1221px]  mx-auto flex flex-wrap items-center justify-center gap-[16px] relative">
        <img src={d1} alt="" className="h-[396px]" />
        <div className="flex flex-col gap-[15px] flex-grow">
          <img src={d2} alt="" className="h-[257px]" />
          <img src={d21} alt="" className="h-[257px]" />
        </div>
        <img src={d3} alt="" className="h-[396px]" />
        <img src={d4} alt="" className="h-[396px]" />
      </div>
    </div>
  );
};

export default Section4;
