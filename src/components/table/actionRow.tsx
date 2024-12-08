import React, { useState } from "react";
import ddownload from "../../assets/images/document-download.png";

interface ActionRowProps {
  name: string;
  width: any;
  handleDownload: (link: string) => void;
  link: string;
  setShowDocumment?: (show: boolean) => void;
  setUrl?: (url: string) => void;
}

const ActionRow: React.FC<ActionRowProps> = ({
  name,
  width,
  handleDownload,
  link,
  setShowDocumment,
  setUrl,
}) => {
  const [isActionsVisible, setIsActionsVisible] = useState(false);

  return (
    <td className="rows" style={{ maxWidth: `${width}%` }}>
      <div className="flex items-end gap-2 relative  justify-end">
        <button
          className="py-[6px] px-3 bg-[#7F56D91F] rounded-xl flex items-center gap-[4px] cursor-pointer justify-center h-8"
          onClick={() => setIsActionsVisible(!isActionsVisible)}
        >
          <span className="text-[14px] text-[#7F55DA] leading-5 font-bold font-Satoshi">
            Actions
          </span>
        </button>

        {isActionsVisible && (
          <div className="absolute bg-white shadow-md rounded-md p-2 flex flex-col gap-2 top-8 z-40">
            <div
              className="py-2 px-3 bg-[#7F56D91F] rounded flex items-center gap-2 cursor-pointer"
              onClick={() => {
                handleDownload(link);
                setIsActionsVisible(false);
              }}
            >
              <img src={ddownload} alt="Download" className="h-5" />
              <span className="text-[14px] text-[#7F55DA] font-medium">
                {name}
              </span>
            </div>
            <div
              className="py-2 px-3 text-[#7F55DA] font-medium cursor-pointer"
              onClick={() => {
                if (setShowDocumment && setUrl) {
                  setShowDocumment(true);
                  setUrl(`https://cardri.s3.eu-west-1.amazonaws.com/${link}`);
                }
                setIsActionsVisible(false);
              }}
            >
              Preview
            </div>
          </div>
        )}
      </div>
    </td>
  );
};

export default ActionRow;
