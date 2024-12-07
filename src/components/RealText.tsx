import React from "react";

interface RealTextProps {
  richText: string;
}
const RealText: React.FC<RealTextProps> = ({ richText }) => {
  return (
    <div
      className="font-Poppins"
      dangerouslySetInnerHTML={{ __html: richText }}
    />
  );
};

export default RealText;
