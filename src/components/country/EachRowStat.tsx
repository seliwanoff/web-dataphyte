import React from "react";

interface EachRowStatProps {
  title: string;
  figure: number | string;
}

const EachRowStat: React.FC<EachRowStatProps> = ({ title, figure }) => {
  return (
    <tr className="eachrow">
      <td className="pl-2 border-r border-[#9B9B9B]">{title}</td>
      <td className="pl-2 border-r border-[#9B9B9B] xl:leading-9 leading-6 xl:text-[24px] text-[16px]">
        {figure}
      </td>
    </tr>
  );
};

export default EachRowStat;
