import React, { useState, useEffect } from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";

interface Descendant {
  id: number;
  name: string;
  country: string;
  rc_number: string;
  address: string;
  image: string;
  created_at: string;
  updated_at: string;
  children: Descendant[];
}

interface CompanyData extends Descendant {
  descendants: Descendant[];
}

const ExampleMap: React.FC = () => {
  const [data, setData] = useState<CompanyData[]>([]);

  useEffect(() => {
    // Replace YOUR_ENDPOINT_HERE with the actual API endpoint
    fetch("YOUR_ENDPOINT_HERE")
      .then((response) => response.json())
      .then((data: CompanyData[]) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const companyData: CompanyData = {
    id: 160,
    name: "AAY Mining Sites",
    country: '["Nigeria","Ghana"]',
    rc_number: "2344455",
    address: "Akpet",
    image: "dataphyte/1734872178_Screenshot 2024-12-15 at 19.04.02.png",
    created_at: "2024-12-22T12:56:20.000000Z",
    updated_at: "2024-12-22T12:56:20.000000Z",
    descendants: [
      {
        id: 162,
        name: "AAY Mining Sites",
        country: '["Nigeria","Ghana"]',
        rc_number: "2344455",
        address: "Akpet",
        image: "dataphyte/1734872420_Screenshot 2024-12-15 at 19.04.02.png",
        created_at: "2024-12-22T13:00:21.000000Z",
        updated_at: "2024-12-22T13:00:21.000000Z",
        children: [
          {
            id: 163,
            name: "AAY Mining Sites",
            country: '["Nigeria","Ghana"]',
            rc_number: "2344455",
            address: "Akpet",
            image: "dataphyte/1734872465_Screenshot 2024-12-15 at 19.04.02.png",
            created_at: "2024-12-22T13:01:07.000000Z",
            updated_at: "2024-12-22T13:01:07.000000Z",
            // descendants: [],
            children: [],
          },
        ],
      },
    ],
    children: [
      {
        id: 162,
        name: "AAY Mining Sites",
        country: '["Nigeria","Ghana"]',
        rc_number: "2344455",
        address: "Akpet",
        image: "dataphyte/1734872420_Screenshot 2024-12-15 at 19.04.02.png",
        created_at: "2024-12-22T13:00:21.000000Z",
        updated_at: "2024-12-22T13:00:21.000000Z",

        children: [
          {
            id: 163,
            name: "AAY Mining Sites",
            country: '["Nigeria","Ghana"]',
            rc_number: "2344455",
            address: "Akpet",
            image: "dataphyte/1734872465_Screenshot 2024-12-15 at 19.04.02.png",
            created_at: "2024-12-22T13:01:07.000000Z",
            updated_at: "2024-12-22T13:01:07.000000Z",
            //descendants: [],
            children: [],
          },
        ],
      },
    ],
  };

  const MyNodeComponent: React.FC<{ node: any }> = ({ node }) => (
    <div
      className="bg-white p-4 border rounded shadow-md text-center cursor-pointer hover:bg-gray-100"
      onClick={() => alert(`Hi, my real name is: ${node.actor}`)}
    >
      <p className="font-semibold text-gray-800">{node.name}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Company Hierarchy
      </h1>

      <OrgChart
        tree={companyData}
        NodeComponent={MyNodeComponent}
        className="mt-8"
      />

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Fetched Data
        </h2>
        <ul className="space-y-4">
          {(data.length > 0 ? data : []).map((company) => (
            <li
              key={company.id}
              className="p-4 bg-white border rounded shadow-sm"
            >
              <h3 className="text-lg font-bold">{company.name}</h3>
              <p className="text-sm text-gray-600">
                Country: {company.country}
              </p>
              <p className="text-sm text-gray-600">
                RC Number: {company.rc_number}
              </p>
              <p className="text-sm text-gray-600">
                Address: {company.address}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExampleMap;
