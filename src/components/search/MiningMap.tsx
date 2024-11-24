import React from "react";
import ellipse from "../../assets/images/ellipse.png";
import locations from "../../assets/images/location.png";
import { useLocation, useNavigate } from "react-router-dom";
import map from "../../assets/images/picmap.png";

interface CompanySearchWidgetProps {
  mineralName: string;
  countries: string;
  miningCount: number;
  docCount: number;
  mineral?: string;
  role?: string;
  id?: any;
}
const MiningMapSite: React.FC<CompanySearchWidgetProps> = ({
  mineralName,
  countries,
  miningCount,
  docCount,
  mineral,
  role,
  id,
}) => {
  const navigates = useNavigate();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "" || "";

  const handleCompanyRedirect = () => {
    navigates(`/company-profile?q=${encodeURIComponent(queryName)}`, {
      state: { id: id },
    });
  };
  return (
    <div className="gap-[10px] p-[12px]   flex-grow border border-[#e0e0e0] rounded-[8px] widthl">
      <div className="flex gap-[10px]  flex-col">
        <div className="mw-full h-[171pmx]">
          <img src={map} alt="" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <h3 className="p-0 m-0 font-semibold font-Poppins text-[16px] leading-6 text-[#000]">
            {mineralName}
          </h3>
          <div className="flex gap-[8px] items-center">
            <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] items-center text-[#828282]">
              <p className="font-medium text-[#000]">{miningCount}</p> Mineral
            </span>
          </div>
          <span className="text-[#333] text-[14px] font-normal leading-[21px] font-Poppins flex items-center">
            <img src={locations} alt="" className="h-[16px] mr-2" />
            {countries}
          </span>
        </div>
      </div>{" "}
    </div>
  );
};

export default MiningMapSite;
