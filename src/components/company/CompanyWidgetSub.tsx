import React from "react";
import { useNavigate } from "react-router-dom";

interface Company {
  logo: string;
  name?: string | { name: string };
  image?: string;
  id: any;
}

interface CompanyWidgetSubProps {
  companies: Company[];
  title: string;
  size: string;
  image?: string;
  id?: any;
}

const CompanyWidgetSub: React.FC<CompanyWidgetSubProps> = ({
  companies,
  title,
  size,
  image,
  id,
}) => {
  //console.log(companies);
  const baseURl = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  const baseURlFile = process.env.REACT_APP_FILE_URL;

  // console.log(baseURlFile);

  return (
    <>
      {companies.length > 0 && (
        <div className="w-full xl:px-[110px] px-[24px]">
          <div className="w-full max-w-[1750px] mx-auto border-t-2 border-[#d6d6d6] py-6 flex xl:flex-row flex-col gap-6 justify-start xl:pb-[56px]">
            <span className="text-[#979389] font-Poppins text-[14.22px] font-bold leading-[13.86px] w-fit text-nowrap uppercase">
              {title}
            </span>

            <div className="w-full gap-[29px] flex justify-center items-center">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 items-center cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/company-profile?q=${
                        typeof company.name === "string"
                          ? company.name
                          : company.name && company?.name.name
                      }&id=${company.id}`,
                      {
                        state: {
                          id: company.id,
                        },
                      }
                    )
                  }
                >
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={`${baseURlFile}${company.image}`}
                      alt={company.image}
                      className="xl:h-[58.85px] h-[40px] xl:w-[58.85px] w-10 rounded-full"
                    />
                    <span
                      className={`font-Poppins font-bold leading-[23.4px] ${size} text-[#161616]m`}
                    >
                      {typeof company.name === "string"
                        ? company.name
                        : company.name && company?.name.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyWidgetSub;
