import React from "react";

interface RegulationTextProps {
  title: string;
  description: string;
}

const RegulationText: React.FC<RegulationTextProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col py-7 gap-10">
      <div className="flex flex-col gap-[8px] w-full max-w-[530px]">
        <h3 className="text-[#161616] font-polySans text-[24px] xl:text-[40px] font-semibold leading-[55.36px] m-0 p-0">
          {title}
        </h3>
        <p className="text-[#525252] text-[18.93px] leading-[25.55px] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RegulationText;
