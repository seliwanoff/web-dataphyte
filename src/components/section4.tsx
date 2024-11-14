import d1 from "../assets/images/d1.png";
import d2 from "../assets/images/d2.png";
import d21 from "../assets/images/d21.png";
import d3 from "../assets/images/d3.png";
import d4 from "../assets/images/access.png";
import d5 from "../assets/images/d5.png";

const Section4 = () => {
  return (
    <div className="bg-custom-gradient xl:px-[110px] px-[24px] xl:py-[56px] py-[40px] flex justify-center flex-col">
      <div className="flex  justify-between w-full max-w-[1750px] mx-auto xl:gap-0 gap-[27px]">
        <h3 className="font-semibold xl:text-[40px] text-[16px] xl:leading-[55.36px] leading-[22.14px] font-polySans text-white max-w-[562px]">
          Quality Mineral Services with JET Minerals
        </h3>

        <div className="flex  flex-col gap-[23.66px] w-full max-w-[530px] justify-start">
          <p className="font-Satoshi font-normal text-white xl:leading-[25.55px] leading-[16.2px] text-xs xl:text-[18.93px]">
            Our platform provides detailed mining data across Africa, offering
            interactive maps, legal insights, and real-time reports. Explore
            mining sites and stay informed with up-to-date information for all
            key stakeholders.
          </p>
          <button className="w-full max-w-[171px] border-2 border-[#6d6d6d] py-[3.36] px:[4.48px] xl:py-[12.93] xl:px-[18.03px] rounded-[33.8px] xl:text-[18.93] font-Satoshi leading-[25.33px] font-bold h-[47.32px] bg-[#1E1E1E] text-white ">
            Find out more
          </button>
        </div>
      </div>
      <div className="text-white xl:mt-[72px] mt-[30px] w-full max-w-[1750px]  mx-auto flex items-center justify-center gap-1 xl:gap-[16px] relative">
        <img
          src={d1}
          alt=""
          className="xl:h-[396px]  h-[107.34px] saturate-0"
        />
        <div className="flex flex-col xl:gap-[15px] gap-1 xl:flex-grow">
          <img
            src={d2}
            alt=""
            className="xl:h-[257px]  h-[69.69px] saturate-0"
          />
          <img
            src={d21}
            alt=""
            className="xl:h-[257px]  h-[69.69px] saturate-0"
          />
        </div>
        <img
          src={d3}
          alt=""
          className=" xl:h-[396px]  h-[107.34px] saturate-0 "
        />
        <div className=" bg-no-custom xl:h-[535px]  h-[144.9px] bg-clip-content  relative">
          <img src={d4} alt="" className="h-full z-0" />
          <img src={d5} alt="" className="h-full z-0 absolute top-0" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
