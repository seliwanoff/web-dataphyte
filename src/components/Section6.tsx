import star from "../assets/images/star.png";
import EachNewsCard from "./eachNewCards";

const Section6 = () => {
  return (
    <div className="w-full bg-white px-[110px] py-[32px]">
      <div className="max-w-[1221px]  mx-auto py-[100px] flex flex-col gap-16">
        <div className="flex flex-col gap-[42px] items-center justify-center w-full">
          <div className="flex flex-col gap-4">
            <div className="h-[40px] py-[8px] px-[12px] flex gap-[10px] items-center mx-auto bg-[#7F55DA0A] rounded-[71px]">
              <img src={star} alt="" className="h-[16.29px]" />
              <span className="text-[18px] font-medium font-Satoshi leading-[24.3px] text-[#7F55DA]">
                Blog
              </span>
            </div>
            <h2 className="font-Poppins text-[#333] font-semibold  leading-[42px] text-[32px]">
              Explore minerals updates around the globe
            </h2>
            <button className="px-8 py-4 bg-[#7F55DA] rounded-[36px]  justify-center flex items-center text-white font-Satoshi font-bold leading-[21.6px] w-full max-w-[155px] mx-auto">
              See all news
            </button>
          </div>
        </div>
        <div className="flex flex-[16px] items-center gap-8 ">
          <EachNewsCard />
          <EachNewsCard />
          <EachNewsCard />
        </div>
      </div>
    </div>
  );
};

export default Section6;
