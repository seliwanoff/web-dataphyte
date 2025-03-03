import React from "react";

interface CompanyIframeProps {
  id: string;
}

const CompanyIframe: React.FC<CompanyIframeProps> = ({ id }) => {
  const url = `https://home-sigma-liard.vercel.app/company/organization-mapping?id=${id}`;

  return (
    <div className="w-full h-[500px] mx-auto max-w-[1250px]">
      <iframe
        src={url}
        title="Company Mapping"
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default CompanyIframe;
