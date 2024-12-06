import React from "react";

interface RealTextProps {
  richText: string;
}

const RealText: React.FC<RealTextProps> = ({ richText }) => {
  return <div dangerouslySetInnerHTML={{ __html: richText }} />;
};

export default RealText;
