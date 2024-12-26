import React, { useState } from "react";

interface CompanyNode {
  id: number;
  name: string;
  image: string;
  address: string;
  children: CompanyNode[];
}

interface OrganizationChartProps {
  data: CompanyNode;
}

const OrganizationChart: React.FC<OrganizationChartProps> = ({ data }) => {
  //console.log(data);
  const [currentNode, setCurrentNode] = useState<CompanyNode>(data);
  const [history, setHistory] = useState<CompanyNode[]>([]);

  const navigateToChild = (node: CompanyNode) => {
    setHistory((prev) => [...prev, currentNode]);
    setCurrentNode(node);
  };

  const navigateBack = () => {
    const previousNode = history.pop();
    if (previousNode) {
      setCurrentNode(previousNode);
      setHistory([...history]);
    }
  };

  const renderNode = (node: CompanyNode) => {
    return (
      <div key={node.id} className="border rounded-lg p-4 bg-white shadow-md">
        <div className="flex items-center">
          {node.name}
          <img
            src={node.image}
            alt={node.name}
            className="w-12 h-12 rounded-full border-2 border-purple-500"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">{node.name}</h3>
            <p className="text-sm text-gray-600">{node.address}</p>
          </div>
          {node.children?.length > 0 && (
            <button
              className="ml-auto text-sm bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
              onClick={() => navigateToChild(node)}
            >
              View Children
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-4 flex items-center justify-between">
        {history?.length > 0 && (
          <button
            className="text-sm bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
            onClick={navigateBack}
          >
            Back to Parent
          </button>
        )}
        <h1 className="text-2xl font-bold text-center">Organization Chart</h1>
        <div />
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {renderNode(currentNode)}
        {currentNode.children?.map((child) => renderNode(child))}
      </div>
    </div>
  );
};

export default OrganizationChart;
