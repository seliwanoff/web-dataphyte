import React from "react";
import OrgChart from "../components/company/OrgChart";

const OrgCharWrapper: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Dataphyte Limited</h1>
      <OrgChart />
    </div>
  );
};

export default OrgCharWrapper;
