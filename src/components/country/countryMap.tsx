import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import nigeriaGeoJson from "../../data/nigeria_geojson.geojson";
import ghana from "../../data/ghana_towns.json";
import mz from "../../data/mozambique.json";
import cd from "../../data/administraveDivision.json";

// Ensure this path is correct

// Define the interface for the selected region data
interface MiningData {
  state: string;
  localGovernment: string;
  coordinates: any; // You can adjust this type based on your specific needs
  miningInfo: string;
}
interface MapdataPops {
  country?: any;
}

// JSON data for states with mining activities
const miningStates = [
  "Kaduna",
  "Plateau",
  "Zamfara",
  "Kogi",
  "Niger",
  "Enugu",
  "Ogun",
  "Ondo",
];

const CountryMap = ({ country }: MapdataPops) => {
  const [zoom, setZoom] = useState(1); // Zoom level
  const [selectedRegion, setSelectedRegion] = useState<MiningData | null>(null);

  const handleGeographyClick = (geo: any) => {
    const state = geo.properties.state || "Unknown State";
    const localGovernment = geo.properties.local_government || "Unknown LGA";
    const coordinates = geo.geometry.coordinates; // Extract coordinates

    const miningData: MiningData = {
      state,
      localGovernment,
      coordinates,
      miningInfo: `Sample mining data for ${localGovernment}, ${state}.`,
    };

    setSelectedRegion(miningData); // Set selected region data
  };

  return (
    <div className="w-full max-w-[1750px] mx-auto">
      <h1 className="font-polySans text-[32px] font-semibold leading-[44.29px] text-[#161616]">
        Map of {country}
      </h1>

      <div className="rounded-[32px] bg-[#f0f0f0] flex justify-center w-full mt-[36px] content-center">
        <ComposableMap
          width={712}
          height={570}
          projection="geoMercator"
          projectionConfig={{
            scale: 2000 / zoom, // Adjust scale based on zoom
            center: [8.6753, 9.082], // Center coordinates for Nigeria
          }}
        >
          <Geographies
            geography={
              country === "Nigeria"
                ? nigeriaGeoJson
                : country === "Ghana"
                ? ghana
                : country === "Mozambique"
                ? mz
                : cd
            }
          >
            {({ geographies }) =>
              geographies.map((geo) => {
                const state = geo.properties.state || "Unknown State";
                const fillColor = miningStates.includes(state)
                  ? "#7F55DA"
                  : "#272727"; // Set color based on JSON data

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#FFFFFF"
                    strokeWidth={1}
                    onClick={() => handleGeographyClick(geo)} // Handle clicks
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/***

      {selectedRegion && (
        <div className="mt-4 p-4 border rounded bg-white">
          <h2 className="text-lg font-semibold">Selected Region</h2>
          <p>State: {selectedRegion.state}</p>
          <p>Local Government: {selectedRegion.localGovernment}</p>
          <p>Coordinates: {JSON.stringify(selectedRegion.coordinates)}</p>
          <p>Mining Info: {selectedRegion.miningInfo}</p>
        </div>
      )}
      */}
    </div>
  );
};

export default CountryMap;
