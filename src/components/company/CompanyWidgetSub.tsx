import React from "react";

interface Company {
  logo: string;
  name: string;
}

interface CompanyWidgetSubProps {
  companies: Company[];
  title: string;
  size: string;
}

const CompanyWidgetSub: React.FC<CompanyWidgetSubProps> = ({
  companies,
  title,
  size,
}) => {
  return (
    <div className="w-full xl:px-[110px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto border-t-2  border-[#d6d6d6] py-6 flex  xl:flex-row flex-col gap-6 justify-start xl:pb-[56px]">
        <span className="text-[#979389] font-Poppins text-[14.22px] font-bold leading-[13.86px] w-fit text-nowrap uppercase">
          {title}
        </span>

        <div className="w-full gap-[29px] flex justify-center items-center">
          {companies.map((company, index) => (
            <div className="flex flex-col gap-6 items-center ">
              <div key={index} className="flex flex-col items-center gap-2">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="xl:h-[58.85px] h-[40px] xl:w-[58.85px] w-10"
                />
                <span
                  className={`font-Poppins font-bold leading-[23.4px] ${size} text-[#161616`}
                >
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyWidgetSub;