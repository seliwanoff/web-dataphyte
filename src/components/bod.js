import React, { useEffect, useRef } from "react";

const OwnershipChart = ({ rawData }) => {
  const containerRef = useRef(null);

  function transformToBODS(rawData, entityMap = {}) {
    const statements = [];

    function processCompany(company) {
      const entityStatement = {
        statementType: "entityStatement",
        statementID: `entity-${company.id}`,
        name: company.name,
        jurisdiction: company.country,
        identifiers: [{ scheme: "RC_NUMBER", id: company.rc_number }],
        addresses: [{ type: "registered", address: company.address }],
        foundingDate: new Date().toISOString().split("T")[0],
        publicationDetails: {
          publicationDate: new Date().toISOString().split("T")[0],
        },
      };

      statements.push(entityStatement);
      entityMap[company.id] = entityStatement.statementID;

      if (company.parent_id && entityMap[company.parent_id]) {
        const ownershipStatement = {
          statementType: "ownershipOrControlStatement",
          statementID: `ownership-${company.id}`,
          subject: { describedByEntityStatement: entityMap[company.id] },
          interestedParty: {
            describedByEntityStatement: entityMap[company.parent_id],
          },
          interest: [{ type: "shareholding", exact: 100 }],
        };
        statements.push(ownershipStatement);
      }

      if (company.children && company.children.length > 0) {
        company.children.forEach(processCompany);
      }
    }

    rawData.forEach(processCompany);
    console.log("Transformed Entity Map:", entityMap);
    console.log("Generated Statements:", statements);
    return { statements };
  }

  useEffect(() => {
    if (rawData.length > 0 && containerRef.current) {
      const bodsData = transformToBODS(rawData);
      const imagesPath = "/path-to-images"; // Update this path
      const labelLimit = 8;
      containerRef.current.innerHTML = ""; // Clear existing content

      const drawChart = () => {
        if (window.BODSDagre && window.BODSDagre.draw) {
          console.log("BODSDagre is available. Drawing chart...");
          window.BODSDagre.draw(
            bodsData,
            containerRef.current,
            imagesPath,
            labelLimit
          );
        } else {
          console.error(
            "BODSDagre.draw is not available. Make sure the module is correctly loaded."
          );
        }
      };

      if (window.BODSDagre?.draw) {
        console.log("Hello");
        drawChart();
      } else {
        console.log("Waiting for BODSDagre to load...");
        const interval = setInterval(() => {
          if (window.BODSDagre?.draw) {
            clearInterval(interval);
            drawChart();
          }
        }, 500);
      }
    }
  }, [rawData]);

  return (
    <div>
      <h2>Ownership Structure</h2>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}
      >
        {rawData.length === 0 && <p>Loading ownership data...</p>}
      </div>
    </div>
  );
};

export default OwnershipChart;
