import React from "react";
import doc from "../../assets/images/doc.png";
import dd from "../../assets/images/document-download.png";
import pdf from "../../assets/images/pdf.png";
import audio from "../../assets/images/audio.png";
import video from "../../assets/images/video.png";

import location from "../../assets/images/location.png";

interface CompanySearchWidgetProps {
  mineralName: string;
  countries: string;
  miningCount: number;
  docCount: number;
  mineral?: string;
  type?: string;
}

const DocumentSearchMobileWidget: React.FC<CompanySearchWidgetProps> = ({
  mineralName,
  countries,
  miningCount,
  docCount,
  mineral,
  type,
}) => {
  return (
    <div className="gap-[10px] p-[12px] mt-4  flex-grow border border-[#e0e0e0] rounded-[8px] widthl">
      <div className="flex gap-[10px] items-center">
        <div className="flex flex-col gap-[4px]">
          <div className="flex items-center gap-2">
            <img
              src={
                type === "pdf"
                  ? pdf
                  : type === "mp4"
                  ? video
                  : type === "audio"
                  ? audio
                  : doc
              }
              alt=""
              className="h-6"
            />
            <h3 className="p-0 m-0 font-semibold font-Poppins text-[16px] leading-6 text-[#000]">
              {mineralName}
            </h3>
          </div>

          <div className="flex gap-[8px] items-center">
            <span className="flex gap-[4px] text-[14px] font-Poppins leading-[21px] items-center text-[#828282]">
              <p className="font-medium text-[#000] ml-8">708kb</p>
            </span>
          </div>
          <span className="text-[#333] text-[14px] font-normal leading-[21px] font-Poppins flex items-center">
            <img src={location} alt="" className="h-[16px] mr-2" />
            {countries}
          </span>
        </div>
      </div>
      <button className="mt-4  w-full gap-4 py-[10px] px-[32px]  bg-[#7F55DA0F] rounded-[32px] flex items-center justify-center font-Satoshi font-semibold text-[15px] leading-[21.6px] text-[#7F55DA]">
        <img src={dd} alt="" className="h-6" /> Download file
      </button>
    </div>
  );
};

export default DocumentSearchMobileWidget;
