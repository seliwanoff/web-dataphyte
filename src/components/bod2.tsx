import React from "react";
import "@yworks/react-yfiles-company-ownership/dist/index.css";
import {
  CompanyOwnership,
  CompanyOwnershipData,
  registerLicense,
  Entity,
  Ownership,
} from "@yworks/react-yfiles-company-ownership";
import licenseData from "../assets/license.json";

registerLicense(licenseData);

interface CompanyNode {
  id: number;
  name: string;
  parent_id: number | null;
  children?: CompanyNode[];
}

interface OwnerShipCompanyChartProps {
  data: {
    companies: Entity[];
    connections: Ownership[];
  };
}

const transformEndpointData = (
  rawData: any
): CompanyOwnershipData<Entity, Ownership> => {
  const companies = Array.isArray(rawData?.companies) ? rawData.companies : [];
  const connections = Array.isArray(rawData?.connections)
    ? rawData.connections
    : [];

  const transformedCompanies = companies.map((company: Entity) => ({
    ...company,
    type: "Corporation", // Ensure the type is set correctly
  }));

  const transformedConnections = connections.map(
    ({ ownership, ...conn }: Ownership) => ({
      ...conn,
      type: "Ownership",
      // ownership: parseFloat(ownership), // Ensure ownership is a number
    })
  );

  return {
    companies: transformedCompanies,
    connections: transformedConnections,
  };
};

const transformData = (
  node: CompanyNode
): { companies: Entity[]; connections: Ownership[] } => {
  const companies: Entity[] = [];
  const connections: Ownership[] = [];

  const traverse = (node: CompanyNode) => {
    companies.push({
      id: node.id,
      name: node.name,
      type: "Corporation",
    });

    if (node.parent_id !== null) {
      connections.push({
        sourceId: node.parent_id,
        type: "Ownership",
        ownership: 0,
        targetId: node.id,
      });
    }

    if (node.children) {
      node.children.forEach((child) => traverse(child));
    }
  };

  traverse(node);

  return { companies, connections };
};

const OwnerShipCompanyChart = ({ data }: any) => {
  const transformedData = transformData(data);

  const chartData = transformEndpointData(transformedData);

  return <CompanyOwnership data={chartData} />;
};

export default OwnerShipCompanyChart;
