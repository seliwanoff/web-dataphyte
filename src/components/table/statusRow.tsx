import React from "react";

import active from "../../assets/images/active.png";
import pending from "../../assets/images/pending.png";
import expired from "../../assets/images/expired.png";

interface TableRowProps {
  name: string;
  width: any;
}

const StatusRow: React.FC<TableRowProps> = ({ name, width }) => {
  return (
    <td className="rows" style={{ maxWidth: `${width}%` }}>
      <div className="border border-[#d0d5dd] py-1 px-1 flex items-center gap-2 rounded-sm w-fit">
        <img
          src={
            name === "Active" ? expired : name === "Expired" ? active : pending
          }
          alt=""
          className="h-[8px]"
        />

        <span className="font-Inter text-[12px] font-medium leading-[18px] text-center">
          {name}
        </span>
      </div>
    </td>
  );
};

export default StatusRow;
