import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import nigeriaGeoJson from "../../data/nigeria_geojson.geojson"; // Ensure this path is correct

// Define the interface for the selected region data
interface MiningData {
  state: string;
  localGovernment: string;
  coordinates: any; // You can adjust this type based on your specific needs
  miningInfo: string;
}

const CountryMap: React.FC = () => {
  const [zoom, setZoom] = useState(1); // Zoom level
  const [selectedRegion, setSelectedRegion] = useState<MiningData | null>(null); // State for selected region

  const handleGeographyClick = (geo: any) => {
    // Extract state, local government, and coordinates
    const state = geo.properties.state || "Unknown State"; // Ensure this matches your GeoJSON property
    const localGovernment = geo.properties.local_government || "Unknown LGA"; // Ensure this matches your GeoJSON property
    const coordinates = geo.geometry.coordinates; // Extract coordinates
    console.log(selectedRegion);
    // Example mining data (replace with actual data)
    const miningData: MiningData = {
      state,
      localGovernment,
      coordinates,
      miningInfo: `Sample mining data for ${localGovernment}, ${state}.`,
    };

    // Log details for debugging
    console.log("State:", state);
    console.log("Local Government:", localGovernment);
    console.log("Coordinates:", coordinates);

    setSelectedRegion(miningData); // Set selected region data
  };

  return (
    <div className="w-full max-w-[1750px] mx-auto">
      <h1 className="font-polySans text-[32px] font-semibold leading-[44.29px] text-[#161616]">
        Map of Nigeria
      </h1>

      <div className="rounded-[32px] bg-[#f0f0f0] flex justify-center w-full mt-[36px]">
        <ComposableMap
          width={712}
          height={570}
          projection="geoMercator"
          projectionConfig={{
            scale: 2000 / zoom, // Adjust scale based on zoom
            center: [8.6753, 9.082], // Center coordinates for Nigeria
          }}
        >
          <Geographies geography={nigeriaGeoJson}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#272727;"
                  stroke="#FFFFFF"
                  strokeWidth={1}
                  onClick={() => handleGeographyClick(geo)} // Handle clicks
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* Display selected region details */}
      {selectedRegion && (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="font-semibold text-lg">Selected Region Details:</h2>
          <p>State: {selectedRegion.state}</p>
          <p>Local Government: {selectedRegion.localGovernment}</p>

          <p>Mining Info: {selectedRegion.miningInfo}</p>
        </div>
      )}
    </div>
  );
};

export default CountryMap;
