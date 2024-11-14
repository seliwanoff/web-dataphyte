import africa from "../assets/images/lgmap.png";
import africa2 from "../assets/images/africa2.png";

const Sectin5 = () => {
  return (
    <div className="bg-hero-pattern mt-[32px] xl:px-[110px] px-[24px] xl:py-[64px] py-[32px] bg-cover bg-no-repeat">
      <div className="max-w-[1750px] mx-auto">
        <div className="max-w-[630px] mx-auto flex flex-col gap-2">
          <h3 className="font-semibold font-polySans  text-[24px] xl:text-[32px] leading-[33.2px] xl:leading-[44.29px] text-white text-center">
            Explore mining projects across Africa
          </h3>
          <p className="font-normal text-[14px] xl:text-[18px] font-Poppins leading-[21px] xl:leading-8 text-center text-white">
            Lorem ipsum dolor sit amet consectetur. Ac sem magna habitant
            elementum justo. Mauris fusce lobortis ipsum est aliquet vestibulum.
          </p>
        </div>

        <img
          src={africa}
          alt=""
          className="xl:h-[541.54px] hidden xl:block h-[394px] mx-auto mt-[56px]"
        />
        <img
          src={africa2}
          alt=""
          className="xl:h-[541.54px] block xl:hidden h-[394px] mx-auto mt-[56px] max-w-[541px] w-full"
        />
        <button className="py-4  mt-[40px] xl:hidden px-8 rounded-[36px] bg-[#7F55DA] text-center text-white font-Satoshi font-bold text-[16px] leading-[21.6px] w-full xl:w-fit">
          Explore Interactive Map
        </button>
      </div>
    </div>
  );
};

export default Sectin5;
