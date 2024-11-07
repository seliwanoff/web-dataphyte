// src/components/OrgChart.tsx
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { organizationData } from "./organization";
import { OrgNode } from "./type";

const OrgChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const width = 1000;
      const height = 600;
      const margin = { top: 40, right: 20, bottom: 40, left: 20 };

      // Create a D3 hierarchical structure with the correct generic type
      const root = d3.hierarchy<OrgNode>(organizationData);
      const treeLayout = d3
        .tree<OrgNode>()
        .size([
          width - margin.left - margin.right,
          height - margin.top - margin.bottom,
        ]);
      treeLayout(root);

      // Select the SVG element and set its dimensions
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background", "#f9f9f9");

      // Draw links
      svg
        .selectAll(".link")
        .data(root.links())
        .join("line")
        .attr("class", "link")
        .attr("x1", (d) => (d.source.x ?? 0) + margin.left)
        .attr("y1", (d) => (d.source.y ?? 0) + margin.top)
        .attr("x2", (d) => (d.target.x ?? 0) + margin.left)
        .attr("y2", (d) => (d.target.y ?? 0) + margin.top)
        .attr("stroke", "#ccc")
        .attr("stroke-width", 2);

      // Draw nodes
      svg
        .selectAll(".node")
        .data(root.descendants())
        .join("circle")
        .attr("class", "node")
        .attr("cx", (d) => (d.x ?? 0) + margin.left)
        .attr("cy", (d) => (d.y ?? 0) + margin.top)
        .attr("r", 20)
        .attr("fill", (d) => {
          switch (d.data.name) {
            case "Sabi":
            case "Wazobia":
              return "green";
            case "Data":
              return "purple";
            case "Anfani":
              return "blue";
            case "Academy":
              return "orange";
            default:
              return "#ffcc00";
          }
        });

      // Add labels to nodes
      svg
        .selectAll(".label")
        .data(root.descendants())
        .join("text")
        .attr("class", "label")
        .attr("x", (d) => (d.x ?? 0) + margin.left)
        .attr("y", (d) => (d.y ?? 0) + margin.top + 5)
        .attr("text-anchor", "middle")
        .text((d) => d.data.name)
        .style("font-size", "10px")
        .style("font-family", "sans-serif")
        .style("fill", "black");
    }
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default OrgChart;
