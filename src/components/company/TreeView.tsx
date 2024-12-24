import React from "react";

interface NodeType {
  id: number;
  name: string;
  country: string;
  rc_number: string;
  address: string;
  image: string;
  children: NodeType[];
}

interface TreeViewProps {
  data: NodeType[];
}

const TreeNode: React.FC<{ node: NodeType }> = ({ node }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-sm">
      {/* Node Content */}
      <div className="flex items-center space-x-4">
        <img
          src={node.image}
          alt={node.name}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{node.name}</h3>
          <p className="text-sm text-gray-600">RC Number: {node.rc_number}</p>
          <p className="text-sm text-gray-600">Address: {node.address}</p>
          <p className="text-sm text-gray-600">
            Country: {JSON.parse(node.country).join(", ")}
          </p>
        </div>
      </div>

      {/* Render Children */}
      {node.children && node.children.length > 0 && (
        <div className="ml-6 mt-4 border-l-2 border-dashed border-gray-300 pl-4">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
