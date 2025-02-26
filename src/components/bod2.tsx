import React from "react";
import OwnershipChart from "./bod3"; // Import your custom OwnershipChart component
import { OwnershipChartData } from "../types/types"; // Import the necessary types

interface CompanyNode {
  id: number;
  name: string;
  parent_id: number | null;
  children?: CompanyNode[];
}

interface OwnerShipCompanyChartProps {
  data: CompanyNode; // Input data in the tree structure
}

// Function to transform the tree structure into the format expected by OwnershipChart
const transformData = (node: CompanyNode): OwnershipChartData => {
  const companies: { id: number; name: string; type: string }[] = [];
  const connections: {
    sourceId: number;
    targetId: number;
    type: string;
    ownership: number;
  }[] = [];

  const traverse = (node: CompanyNode) => {
    // Add the current node to the companies list
    companies.push({
      id: node.id,
      name: node.name,
      type: "Corporation", // Set the type to match the expected Entity type
    });

    // If the node has a parent, create a connection
    if (node.parent_id !== null) {
      connections.push({
        sourceId: node.parent_id,
        targetId: node.id,
        type: "Ownership",
        ownership: 0, // Set ownership to a number
      });
    }

    // Recursively process children
    if (node.children) {
      node.children.forEach((child) => traverse(child));
    }
  };

  // Start the traversal
  traverse(node);

  return { companies, connections };
};

const OwnerShipCompanyChart = ({ data }: OwnerShipCompanyChartProps) => {
  // Transform the input data into the format expected by OwnershipChart
  const transformedData = transformData(data);

  return <OwnershipChart data={transformedData} />;
};

export default OwnerShipCompanyChart;
