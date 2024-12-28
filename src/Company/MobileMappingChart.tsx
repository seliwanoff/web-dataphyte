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

  const hasChildren = company.children && company.children.length > 0;

  return (
    <div className="flex flex-col items-center gap-4 relative w-full max-w-[400px]">
      {/* Node Header */}
      <div
        className={`bg-[#E9D9FF] w-full max-w-[400px] text-center p-2 rounded-lg mb-4 ${
          hasChildren ? "cursor-pointer" : "cursor-not-allowed"
        } z-50`}
        onClick={() => hasChildren && onNodeClick(company)}
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

      {/* Immediate Children */}
      {isExpanded && hasChildren && (
        <div className="w-full flex flex-col gap-6">
          {company.children?.map((child) => (
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
  const [expandedNodeId, setExpandedNodeId] = useState<number | null>(null);

  const handleNodeClick = (node: Company) => {
    setExpandedNodeId((prev) => (prev === node.id ? null : node.id));
  };

  const renderInitialChart = (root: Company) => (
    <div className="flex flex-col gap-6 relative w-full max-w-[400px] mx-auto">
      <ChartNode
        company={root}
        onNodeClick={handleNodeClick}
        isExpanded={true}
      />
    </div>
  );

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

  const rootNode = data[0];
  const selectedNode =
    expandedNodeId !== null ? findSelectedNode(data, expandedNodeId) : null;

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col gap-10 items-center">
      {/* Parent Company Info */}
      <ComapnyNameDescription
        datas={data}
        name={rootNode?.name}
        meta={""}
        id={rootNode?.id}
      />

      {/* Chart */}
      {selectedNode ? (
        <ChartNode
          company={selectedNode}
          onNodeClick={handleNodeClick}
          isExpanded={true}
        />
      ) : (
        renderInitialChart(rootNode)
      )}
    </div>
  );
};

export default OrganizationChart;
