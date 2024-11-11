import Nigeria from "../../assets/images/Nigeria.png";

const CountryTitle = () => {
  return (
    <div className="mx-auto w-full max-w-[1750px] flex flex-col gap-4">
      <div className="flex gap-[40px] items-center border-b-2 border-[#cecece] pb-2">
        <div className=" gap-[8px]">
          <h3 className="text-[#161616] text-[40px] font-polySans font-semibold leading-[55.36px] p-0 m-0">
            Nigeria
          </h3>
          <p className="text-[#515151] text-[16px] leading-6  font-normal font-Poppins">
            36 States | 774 LGAs | 114 Mining sites
          </p>
        </div>

        <img src={Nigeria} alt="" className="xl:h-14 h-9" />
      </div>
      <p className="font-Poppins text-[16px]  leading-6 font-normal text-[#595757] w-full max-w-[917px] text-left">
        Nigeria has a rich history of mining, primarily focused on resources
        such as{" "}
        <span className="font-medium">
          coal, gold, lithium, columbite, bitumen, iron ore, uranium and
          gemstones
        </span>
        . Major mining operations are concentrated in the northern region, with
        significant contributions to Nigeria's GDP. The government has
        implemented new policies aimed at boosting sustainable mining practices.
      </p>
    </div>
  );
};

export default CountryTitle;
