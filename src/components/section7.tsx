import bgleftbanner from "../assets/images/bg-left-banner.jpg";
import star from "../assets/images/star.png";

const Section7 = () => {
  return (
    <div className="w-full  bg-white  py-[32px] xl:px-[110px] px-[24px]">
      <div className="w-full max-w-[1750px]  mx-auto flex  xl:items-center xl:flex-nowrap flex-wrap justify-between xl:flex-row flex-col-reverse gap-6">
        <div className="flex flex-col gap-[48px] pr-9 justify-start">
          <div className="flex items-center gap-[10px] py-[8px] px-[12px]">
            <img src={star} alt="" className="h-[16.29px]" />

            <span className="font-medium text-[18px] leading-[24.3px] text-[#7F55DA] font-Satoshi">
              Search Investigations and Reports
            </span>
          </div>
          <div className="flex flex-col gap-[16px] max-w-[504px]">
            <h1
              className="font-Satoshi font-bold text-[24px] xl:text-[32px]  leading-8 xl:leading-[38px]
"
            >
              World <span className="text-[#7F55DA]"> minerals data </span>{" "}
              brought to you finger tips
            </h1>
            <p className="font-normal font-Poppins text-[16px] text-[#434343]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              habitant dui consectetur sed nam amet, magna. Iet se
            </p>
          </div>
          <button className="py-4 px-8 rounded-[36px] bg-[#7F55DA] text-center text-white font-Satoshi font-bold text-[16px] leading-[21.6px] xl:w-fit">
            Search minerals
          </button>
        </div>
        <img src={bgleftbanner} alt="" className="xl:h-[530px] h-[305px]" />
      </div>
    </div>
  );
};

export default Section7;
