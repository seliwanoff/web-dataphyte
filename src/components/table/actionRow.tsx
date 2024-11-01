import React from "react";
import ddownload from "../../assets/images/document-download.png";

interface ActionRowProps {
  name: string;
  width: any;
}

const ActionRow: React.FC<ActionRowProps> = ({ name, width }) => {
  return (
    <td className="row " style={{ maxWidth: `${width}%` }}>
      <div className="py-[6px] px-3 bg-[#7F56D91F] rounded-xl flex items-center float-end gap-[4px] cursor-pointer justify-end h-8 w-fit">
        <img src={ddownload} alt="" className="h-5" />

        <span className="text-[14px] text-[#7F55DA] leading-5 font-medium font-Satoshi">
          {name}
        </span>
      </div>
    </td>
  );
};

export default ActionRow;
