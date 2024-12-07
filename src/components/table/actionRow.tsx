import React from "react";
import ddownload from "../../assets/images/document-download.png";

interface ActionRowProps {
  name: string;
  width: any;
  handleDownload: (link: string) => void;
  link: string;
  setShowDocumment?: any;
  setUrl?: any;
}

const ActionRow: React.FC<ActionRowProps> = ({
  name,
  width,
  handleDownload,
  link,
  setShowDocumment,
  setUrl,
}) => {
  return (
    <td className="row " style={{ maxWidth: `${width}%` }}>
      <div className="flex gap-2 items-center">
        <div
          className="py-[6px] px-3 bg-[#7F56D91F] rounded-xl flex items-center float-end gap-[4px] cursor-pointer justify-end h-8 w-fit"
          onClick={() => handleDownload(link)}
        >
          <img src={ddownload} alt="" className="h-5" />

          <span className="text-[14px] text-[#7F55DA] leading-5 font-medium font-Satoshi">
            {name}
          </span>
        </div>
        <span
          className="font-polySans text-[12px] text-[#7F55DA] font-bold cursor-pointer"
          onClick={() => {
            setShowDocumment(true);
            setUrl(`https://cardri.s3.eu-west-1.amazonaws.com/${link}`);
          }}
        >
          Preview
        </span>
      </div>
    </td>
  );
};

export default ActionRow;
