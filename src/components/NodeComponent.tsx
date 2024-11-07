// NodeComponent.tsx
import React from "react";
import { Node } from "../type";

interface NodeComponentProps {
  node: Node;
}

const NodeComponent: React.FC<NodeComponentProps> = ({ node }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div
        className={`w-24 h-24 flex items-center justify-center text-white ${node.color} rounded-full`}
      >
        <span className="text-center font-bold">{node.name}</span>
      </div>

      {node.children && (
        <div className="flex flex-col justify-center">
          <div className="w-0.5 h-6 bg-gray-300" />
        </div>
      )}

      {/* Children Nodes */}
      {node.children && (
        <div className="flex space-x-8 relative">
          {/* Horizontal line connecting children */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-300" />

          {node.children.map((child, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Vertical line to connect to each child */}
              <div className="w-0.5 h-6 bg-gray-300" />
              <NodeComponent node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NodeComponent;
