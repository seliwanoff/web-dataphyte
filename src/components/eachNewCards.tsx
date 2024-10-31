import image from "../assets/images/Image.png";
import arrow from "../assets/images/arrow-up-right.png";
import avater from "../assets/images/Avatar.png";

const EachNewsCard = () => {
  return (
    <div className="w-full max-w-[390px] flex flex-col h-fit basis-[390px] xl:flex-grow-0 xl:flex-shrink-0  gap-6">
      <img src={image} alt="" className="h-[222PX] mb-3" />

      <div className="flex flex-col gap-[32px]">
        <div className="inline-flex items-center p-[4px] pr-[9.29px] bg-[#F5F1FF] rounded-full gap-4 basis-auto flex-grow-0 flex-shrink-0 w-fit">
          <div className="bg-white py-[6px] px-[7.6px] rounded-full h-full text-center text-[11.14px] font-medium font-Satoshi text-[#8B5CF6] leading-[16.7px]">
            Cobalt
          </div>
          <span className="text-center text-[11.14px] font-medium font-Satoshi text-[#8B5CF6] leading-[16.7px]">
            8 min read
          </span>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-center">
            <h3 className="font-bold text-[20px] leading-8 font-Satoshi text-left m-0 p-0">
              The Basics of Mineral Mining: Understanding the Process
            </h3>

            <img src={arrow} alt="" className="h-[26.29]" />
          </div>

          <p className="font-Inter text-[16px] leading-6  font-normal text-[#475467] p-0 m-0">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here’s how to get started.
          </p>
        </div>
        <div className="flex gap-[24px] items-center">
          <img src={avater} alt="" className="h-[37.14px]" />

          <div className="">
            <h3 className="text-[#101828] p-0 m-0 text-[13px]  font-semibold  leading-[18.57px] font-Satoshi">
              Phoenix Baker
            </h3>
            <span className="text-[#475467] font-normal text-[13px] font-Satoshi">
              19 Jan 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachNewsCard;
