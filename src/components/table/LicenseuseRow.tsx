import React from "react";

import active from "../../assets/images/active.png";
import pending from "../../assets/images/pending.png";
import expired from "../../assets/images/expired.png";

interface TableRowProps {
  name: string;
  width: any;
  percentage?: string;
}

const LicenseUseRow: React.FC<TableRowProps> = ({
  name,
  width,
  percentage,
}) => {
  return (
    <td className="rows" style={{ maxWidth: `${width}%` }}>
      <div className="w-[90%] bg-[#EAECF0] h-[8px] rounded-md">
        <div
          className={`h-full bg-[#7F56D9] w-[${percentage}]% rounded-md`}
        ></div>
      </div>
    </td>
  );
};

export default LicenseUseRow;
