// src/components/OwnershipChart.tsx
import React from "react";
import { Company, Ownership, OwnershipChartData } from "../types/types";

interface OwnershipChartProps {
  data: OwnershipChartData;
  onNodeClick?: (company: Company) => void;
}

const OwnershipChart: React.FC<OwnershipChartProps> = ({
  data,
  onNodeClick,
}) => {
  const { companies, connections } = data;

  // Calculate positions for nodes (hierarchical layout)
  const nodePositions: { [key: number]: { x: number; y: number } } = {};
  const levelHeight = 100; // Vertical spacing between levels
  const nodeWidth = 120; // Width of each node
  const nodeHeight = 60; // Height of each node

  companies.forEach((company, index) => {
    const level = Math.floor(index / 3); // Group nodes into levels
    const x = (index % 3) * (nodeWidth + 50) + 50; // Horizontal spacing
    const y = level * levelHeight + 50; // Vertical spacing
    nodePositions[company.id] = { x, y };
  });

  return (
    <svg width="100%" height="600px" style={{ border: "1px solid #ccc" }}>
      {/* Render connections */}
      {connections.map((connection, index) => {
        const source = nodePositions[connection.sourceId];
        const target = nodePositions[connection.targetId];
        if (!source || !target) return null;

        return (
          <line
            key={index}
            x1={source.x + nodeWidth / 2}
            y1={source.y + nodeHeight / 2}
            x2={target.x + nodeWidth / 2}
            y2={target.y + nodeHeight / 2}
            stroke="#333"
            strokeWidth={2}
          />
        );
      })}

      {/* Render nodes */}
      {companies.map((company) => {
        const { x, y } = nodePositions[company.id];
        return (
          <g
            key={company.id}
            onClick={() => onNodeClick?.(company)}
            style={{ cursor: "pointer" }}
          >
            <rect
              x={x}
              y={y}
              width={nodeWidth}
              height={nodeHeight}
              fill="#f0f0f0"
              stroke="#333"
              strokeWidth={1}
              rx={5} // Rounded corners
            />
            {company.image && (
              <image
                x={x + 10}
                y={y + 10}
                width={40}
                height={40}
                href={company.image}
              />
            )}
            <text
              x={x + nodeWidth / 2}
              y={y + nodeHeight / 2 + 5}
              textAnchor="middle"
              fill="#333"
              fontSize={12}
            >
              {company.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default OwnershipChart;
