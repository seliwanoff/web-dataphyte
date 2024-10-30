import bgleftbanner from "../assets/images/bg-left-banner.jpg";
import star from "../assets/images/star.png";

const Section7 = () => {
  return (
    <div className="w-full  bg-white  py-[32px] px-[110px]">
      <div className="w-full max-w-[1221px]  mx-auto flex justify-between  ">
        <div className="flex flex-col gap-[48px] pr-9 justify-start">
          <div className="flex items-center gap-[10px] py-[8px] px-[12px]">
            <img src={star} alt="" className="h-[16.29px]" />

            <span className="font-medium text-[18px] leading-[24.3px] text-[#7F55DA] font-Satoshi">
              Search Investigations and Reports
            </span>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h1
              className="font-Satoshi font-bold text-[32px] leading-[38px]
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
          <button className="py-4 px-8 rounded-[36px] bg-[#7F55DA] text-center text-white font-Satoshi font-bold text-[16px] leading-[21.6px] w-fit">
            Search minerals
          </button>
        </div>
        <img src={bgleftbanner} alt="" className="h-[530px]" />
      </div>
    </div>
  );
};

export default Section7;
