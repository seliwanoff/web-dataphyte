import React from "react";
import minerlogo from "../../assets/images/mineral (1).png";
import ellipse from "../../assets/images/ellipse.png";
import { useNavigate } from "react-router-dom";

interface EachComponentProps {
  mineralName: string;
  countries: string;
  miningCount: number;
  docCount: number;
  image?: any;
  id?: any;
}

const EachComponent: React.FC<EachComponentProps> = ({
  mineralName,
  countries,
  miningCount,
  docCount,
  id,
  image,
}) => {
  const navigates = useNavigate();
  const baseURl = process.env.REACT_APP_URL;
  const baseURlFile = process.env.REACT_APP_FILE_URL;

  return (
    <div
      className="gap-[10px] p-[12px] flex-grow border border-[#e0e0e0] rounded-[8px] widthl cursor-pointer "
      onClick={() => {
        navigates(`/mineral?id=${id}`, {
          state: {
            id: id,
          },
        });
      }}
    >
      <div className="flex gap-[10px] items-center">
        <img
          src={image && `${baseURlFile}${image}`}
          alt=""
          className="h-[70px] rounded-full w-[70px]"
        />

        <div className="flex flex-col gap-[4px]">
          <h3 className="p-0 m-0 font-semibold font-Poppins text-[16px] leading-6 text-[#000]">
            {mineralName}
          </h3>
          <span className="text-[#333] text-[14px] font-normal leading-[21px] font-Poppins">
            {countries}
          </span>
          <div className="flex gap-[8px] items-center">
            <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] text-[#828282]">
              <p className="font-medium text-[#000]"></p>
            </span>
            {/**

            <img src={ellipse} alt="" className="h-[8px]" />

            <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] items-center text-[#828282]">
              <p className="font-medium text-[#000]">{docCount}</p> Docs
            </span>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachComponent;
