import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import worldData from "../../data/custom.geo.json";
import RegulationForm from "../../Regulation/regualtionForm";
import { FeatureCollection, Geometry } from "geojson";

// Define the properties structure based on your GeoJSON
interface GeoProperties {
  region?: string;
  name?: string;
  lat?: number; // Add latitude for country center
  lon?: number; // Add longitude for country center
  [key: string]: any; // Allows other dynamic properties
}

const regionToContinentMapping: Record<string, string> = {
  Africa: "Africa",
  Asia: "Asia",
  Europe: "Europe",
  "North America": "North America",
  "South America": "South America",
  Antarctica: "Antarctica",
  Australia: "Australia",
  // Add more mappings if necessary
};

const IneractiveMap = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(
    null
  ); // Add state for continent
  const [countryLatLng, setCountryLatLng] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  useEffect(() => {
    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const geoData = worldData as unknown as FeatureCollection<
      Geometry,
      GeoProperties
    >;

    // Base dimensions for the map
    const baseWidth = 800;
    const baseHeight = 400;

    // Select the SVG element and set up responsive properties
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${baseWidth} ${baseHeight}`) // Use viewBox to make it scalable
      .style("width", "100%") // CSS for responsiveness
      .style("height", "auto");

    // Set up projection and path generator
    const projection = d3
      .geoMercator()
      .fitSize([baseWidth, baseHeight], geoData);
    const pathGenerator = d3.geoPath().projection(projection);

    // Define color based on region selection
    const colorScale = (region: string | null) => {
      if (selectedRegion === region) return "black";
      return "#272727";
    };

    // Draw map paths
    svg
      .selectAll("path")
      .data(geoData.features)
      .join("path")
      .attr("d", pathGenerator)
      .attr("fill", (d) => colorScale(d.properties.region || "")) // Fallback to region or empty
      .attr("stroke", "#FFFFFF")
      .on("click", (event, d) => {
        console.log(d);
        const region = d.properties.region || d.properties.name || "Unknown"; // Fallback
        console.log("Selected region:", region);
        setSelectedRegion(region);

        const continent = regionToContinentMapping[region] || "Unknown"; // Use the mapping or default to "Unknown"
        setSelectedContinent(continent);

        const regionData = geoData.features.filter(
          (d) => d.properties.region === region || d.properties.name === region
        );

        if (regionData.length) {
          const [[x0, y0], [x1, y1]] = pathGenerator.bounds(regionData[0]);

          // Center the view on the region by calculating the midpoint of its bounds
          const centerX = (x0 + x1) / 2;
          const centerY = (y0 + y1) / 2;

          const width = x1 - x0;
          const height = y1 - y0;

          svg
            .transition()
            .duration(1000)
            .attr(
              "viewBox",
              `${centerX - width / 2} ${
                centerY - height / 2
              } ${width} ${height}`
            );
        }

        // Set country coordinates if available
        const lat = d.properties.label_y || 0;
        const lon = d.properties.label_x || 0;
        setCountryLatLng({ lat, lon });
      });

    // Reset zoom if no region is selected
    if (!selectedRegion) {
      svg
        .transition()
        .duration(1000)
        .attr("viewBox", `0 0 ${baseWidth} ${baseHeight}`);
    }
  }, [selectedRegion]);

  const generateGoogleMapsUrl = () => {
    const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

    if (countryLatLng) {
      return `https://www.google.com/maps/embed/v1/view?key=${googleMapApiKey}w&center=${countryLatLng.lat},${countryLatLng.lon}&zoom=10`;
    }
    return "";
  };

  return (
    <div className="w-full">
      <div className="mt-[100px] w-full p-[30px] rounded-[30px] bg-[#f0f0f0]">
        <h3 className="pb-[30px] text-[#161616] text-[32px] font-semibold font-polySans text-left">
          Select Region
        </h3>
        <svg ref={svgRef}></svg>
      </div>

      <div className="flex gap-[38px] items-center mt-11">
        <div className="border border-[#656565] inline-block w-full"></div>
        <span className="font-Poppins text-[16px] font-medium leading-6 text-center text-[#202020]">
          OR
        </span>
        <div className="border border-[#656565] inline-block w-full"></div>
      </div>

      {/* Google Map iframe */}
      {countryLatLng && (
        <div className="w-full mt-10">
          <iframe
            src={generateGoogleMapsUrl()}
            width="100%"
            height="693"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}

      <div className="w-full mt-10">
        <RegulationForm
          buttonLink="javascript:void(0)"
          text="Pick preferred region"
        />
      </div>
    </div>
  );
};

export default IneractiveMap;
