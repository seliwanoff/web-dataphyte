import React from "react";
import ellipse from "../../assets/images/ellipse.png";
import location from "../../assets/images/location.png";
import profile from "../../assets/images/profiledata.png";
import { useProfileContext } from "../../context/ProfileContext";
import { useNavigate } from "react-router-dom";

interface PeopleSearchWidgetProps {
  mineralName: string;
  countries: string;
  miningCount: number;
  docCount: number;
  mineral?: string;
  role?: string;
  id: any;
}

const PeopleSearchWidget: React.FC<PeopleSearchWidgetProps> = ({
  mineralName,
  countries,
  miningCount,
  docCount,
  mineral,
  role,
  id,
}) => {
  const { addProfile } = useProfileContext();
  const navigate = useNavigate();
  const handleViewProfile = () => {
    navigate("/people", { state: { id: id } });
    /**
    addProfile({
      mineralName,
      countries,
      miningCount,
      docCount,
      mineral,
      role,
    })
      */
  };

  return (
    <div className="gap-[10px] p-[12px] flex-grow border border-[#e0e0e0] rounded-[8px] widthl">
      <img src={profile} alt="" className="h-[64px] mx-auto mb-1" />
      <div className="flex gap-[10px] items-center">
        <div className="flex flex-col gap-[4px]">
          <h3 className="p-0 m-0 font-semibold font-Poppins text-[16px] leading-6 text-[#000]">
            {mineralName}
          </h3>
          <div className="flex gap-[8px] items-center">
            <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] text-[#828282]">
              <p className="font-medium text-[#000]">{mineral}</p>
            </span>
            <img src={ellipse} alt="" className="h-[8px]" />
            <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] items-center text-[#828282]">
              <p className="font-medium text-[#000]">{role}</p>
            </span>
          </div>
          <span className="text-[#333] text-[14px] font-normal leading-[21px] font-Poppins flex items-center">
            <img src={location} alt="" className="h-[16px] mr-2" />
            {countries}
          </span>
        </div>
      </div>
      <button
        onClick={handleViewProfile}
        className="mt-4 w-full py-[10px] px-[32px] border border-[#7F55DA] rounded-[32px] flex items-center justify-center font-Satoshi font-semibold text-[15px] leading-[21.6px] text-[#7F55DA]"
      >
        View Profile
      </button>
    </div>
  );
};

export default PeopleSearchWidget;
