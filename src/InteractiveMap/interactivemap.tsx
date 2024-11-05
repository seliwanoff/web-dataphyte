import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import worldData from "../data/custom.geo.json"; // Ensure this points to your local GeoJSON file

const IneractiveMapWrapper = () => {
  const [selectedRegion, setSelectedRegion] = useState(null); // e.g., Africa
  const [selectedCountry, setSelectedCountry] = useState(null); // e.g., Nigeria

  // Handle region (continent) click
  const handleRegionClick = (region: any) => {
    setSelectedRegion(region);
    setSelectedCountry(null); // Reset country selection
  };

  // Handle country click
  const handleCountryClick = (country: any) => {
    setSelectedCountry(country);
  };

  // Render the map based on the current selection
  const renderMap = () => {
    return (
      <ComposableMap projection="geoMercator">
        <Geographies geography={worldData}>
          {({ geographies }) =>
            geographies
              .filter((geo) => {
                // If a country is selected, show only that country
                if (selectedCountry) {
                  return geo.properties.name === selectedCountry;
                }
                // If a region is selected, show only that region's countries
                if (selectedRegion) {
                  return geo.properties.region === selectedRegion;
                }
                // If no selection, show all regions
                return true;
              })
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    selectedCountry
                      ? "lightgreen" // Color for selected country
                      : selectedRegion &&
                        geo.properties.region === selectedRegion
                      ? "lightblue" // Color for selected region
                      : "lightgray" // Default color
                  }
                  stroke="#FFFFFF"
                  onClick={() => {
                    if (selectedRegion && geo.properties.name) {
                      console.log(selectedRegion);
                      handleCountryClick(geo.properties.name);
                    } else {
                      console.log(geo);

                      handleRegionClick(geo.properties.region); // Click to select region
                    }
                  }}
                />
              ))
          }
        </Geographies>
      </ComposableMap>
    );
  };

  return (
    <div>
      <h1>World Map</h1>
      {renderMap()}
      {selectedRegion && !selectedCountry && (
        <h2>Selected Region: {selectedRegion}</h2>
      )}
      {selectedCountry && <h2>Selected Country: {selectedCountry}</h2>}
    </div>
  );
};

export default IneractiveMapWrapper;
