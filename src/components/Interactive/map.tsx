import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import worldData from "../../data/custom.geo.json";

const IneractiveMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleRegionClick = (region: any) => {
    setSelectedRegion(region);
    setSelectedCountry(null);
  };

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country);
  };

  // Render the map based on the current selection
  const renderMap = () => {
    return (
      <ComposableMap projection="geoMercator" height={550}>
        <Geographies geography={worldData}>
          {({ geographies }) =>
            geographies
              .filter((geo) => {
                if (selectedCountry) {
                  return geo.properties.name === selectedCountry;
                }
                if (selectedRegion) {
                  return geo.properties.region === selectedRegion;
                }
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
    <div className="mt-[100px] h-[653px] w-full p-[20px] rounded-[30px] bg-[#f0f0f0]">
      <h3 className="pb-[30px] text-[#161616] text-[32px] font-semibold font-polySans text-left">
        Select Region
      </h3>
      {renderMap()}
    </div>
  );
};

export default IneractiveMap;
