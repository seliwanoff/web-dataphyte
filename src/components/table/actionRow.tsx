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
  const baseURlFile = process.env.REACT_APP_FILE_URL;

  return (
    <td className="rows" style={{ maxWidth: `${width}%` }}>
      <div className="flex items-center justify-end gap-20 relative">
        {/* Download Button */}
        <button
          className="py-2 px-4 bg-[#7F56D91F] rounded-lg flex items-center gap-2 cursor-pointer justify-center"
          onClick={() => {
            handleDownload(link);
            setIsActionsVisible(false);
          }}
        >
          <img src={ddownload} alt="Download" className="h-5" />
          <span className="text-[14px] text-[#7F55DA] font-medium">
            Download
          </span>
        </button>

        {/* Preview Button */}
        <button
          className="py-2 px-4 bg-[#7F56D91F] rounded-lg text-[#7F55DA] font-medium cursor-pointer"
          onClick={() => {
            if (setShowDocumment && setUrl) {
              setShowDocumment(true);
              setUrl(`${baseURlFile}${link}`);
            }
            setIsActionsVisible(false);
          }}
        >
          Preview
        </button>
      </div>
    </td>
  );
};

export default ActionRow;
