import React, { useState } from "react";
import ComapnyNameDescription from "../components/company/companyNameDescription";

interface Company {
  id: number;
  name: string;
  children?: Company[];
  image?: any;
}

interface OrganizationChartProps {
  data: Company[];
}

interface ChartNodeProps {
  company: Company;
  onNodeClick: (company: Company) => void;
  isExpanded: boolean;
}

const ChartNode: React.FC<ChartNodeProps> = ({
  company,
  onNodeClick,
  isExpanded,
}) => {
  const baseURlFile = process.env.REACT_APP_FILE_URL;

  return (
    <div className="flex flex-col items-center gap-9 relative w-full max-w-[400px]">
      <div
        className="bg-[#E9D9FF] w-full max-w-[400px] text-center p-2 rounded-lg mb-4 cursor-pointer z-50"
        onClick={() => onNodeClick(company)}
      >
        <div className="flex items-center justify-center mb-2">
          <img
            src={`${baseURlFile}${company.image}`}
            alt=""
            className="h-8 w-8 rounded-full object-center"
          />
        </div>
        <p className="text-[#161616] font-bold font-Poppins">{company.name}</p>
      </div>

      {company.children && company.children.length > 0 && isExpanded && (
        <div className="absolute top-[0px] left-1/2 border-r border-[#7F55DA]  h-[90%]  box-border z-20"></div>
      )}

      {isExpanded && company.children && company.children.length > 0 && (
        <div className="w-full flex flex-col gap-6">
          {company.children.map((child) => (
            <ChartNode
              key={child.id}
              company={child}
              onNodeClick={onNodeClick}
              isExpanded={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const OrganizationChart: React.FC<OrganizationChartProps> = ({ data }) => {
  //console.log(data);
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);

  const handleNodeClick = (node: Company) => {
    setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
  };

  const renderChart = (nodes: Company[]) => {
    return (
      <div className="flex flex-col gap-6 relative w-full max-w-[400px] mx-auto">
        {nodes &&
          nodes?.map((node) => (
            <ChartNode
              key={node.id}
              company={node}
              onNodeClick={handleNodeClick}
              isExpanded={selectedNodeId === node.id}
            />
          ))}
        {/***
        {selectedNodeId === null && (
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#7F55DA]"></div>
        )}
          */}
      </div>
    );
  };

  const findSelectedNode = (nodes: Company[], id: number): Company | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const child = findSelectedNode(node.children, id);
        if (child) return child;
      }
    }
    return null;
  };

  const selectedNode =
    selectedNodeId !== null ? findSelectedNode(data, selectedNodeId) : null;

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col  gap-10 items-center">
      <ComapnyNameDescription
        datas={data}
        name={data[0]?.name}
        meta={""}
        id={data[0]?.id}
      />
      {selectedNode ? (
        <ChartNode
          company={selectedNode}
          onNodeClick={handleNodeClick}
          isExpanded={true}
        />
      ) : (
        renderChart(data)
      )}
    </div>
  );
};

export default OrganizationChart;
