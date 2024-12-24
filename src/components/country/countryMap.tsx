import React, { useRef, useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import nigeriaGeoJson from "../../data/nigeria_geojson.geojson";
import ghana from "../../data/gh (1).json";
import mz from "../../data/mz (1).json";
import cd from "../../data/administraveDivision.json";

interface MiningData {
  state: string;
  position: { x: number; y: number };
}

interface MapdataPops {
  country?: string;
}

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
  const baseURl = process.env.REACT_APP_URL;

  const [miningStates, setminingState] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (
    url: string,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURl}${url}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setter(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`mininig_site/getstates`, setminingState);
  }, []);

  const [selectedRegion, setSelectedRegion] = useState<MiningData | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleGeographyClick = (geo: any, event: React.MouseEvent) => {
    if (!mapRef.current) return;

    const containerRect = mapRef.current.getBoundingClientRect();
    const relativeX = event.clientX - containerRect.left;
    const relativeY = event.clientY - containerRect.top;

    const state =
      geo.properties.state ||
      geo.properties.adm1_name ||
      geo.properties.name ||
      "Unknown State";

    const miningData: MiningData = {
      state,
      position: { x: relativeX, y: relativeY },
    };

    setSelectedRegion(miningData);
  };

  return (
    <div className="w-full max-w-[1750px] mx-auto relative">
      <h1 className="font-polySans text-[32px] font-semibold leading-[44.29px] text-[#161616]">
        Map of {country}
      </h1>

      <div
        ref={mapRef}
        className="rounded-[32px] bg-[#f0f0f0] flex justify-center w-full mt-[36px] content-center relative"
      >
        <ComposableMap
          width={712}
          height={570}
          projection="geoMercator"
          projectionConfig={{
            scale:
              country === "Nigeria"
                ? 2000
                : country === "Ghana"
                ? 3500
                : country === "Mozambique"
                ? 1000
                : 800,
            center:
              country === "Nigeria"
                ? [8.6753, 9.082]
                : country === "Ghana"
                ? [-1.0232, 7.9465]
                : country === "Mozambique"
                ? [35.5296, -18.6657]
                : [21.7587, -2.8784],
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
                  : "#272727";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#FFFFFF"
                    strokeWidth={1}
                    onClick={(event) => handleGeographyClick(geo, event)}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#FFD700", outline: "none" },
                      pressed: { fill: "#FF5733", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {selectedRegion && (
          <>
            <div
              className="absolute bg-[#9E77ED] w-[2px]"
              style={{
                left: `${selectedRegion.position.x}px`,
                top: `${selectedRegion.position.y}px`,
                height: `calc(100% - ${selectedRegion.position.y}px - 90px)`,
              }}
            ></div>

            <div
              className="absolute bg-[#321470B2] border rounded shadow-lg  w-fit p-6 text-center z-50"
              style={{
                left: `${selectedRegion.position.x}px`,
                bottom: "20px", // Fixed position at the bottom
                transform: "translate(-50%, 0)",
              }}
            >
              <h2 className="  text-white text-[14px] font-Poppins font-semibold">
                {selectedRegion.state}
              </h2>
            </div>
          </>
        )}

        <div className="absolute bottom-[20px] right-[20px] flex gap-2">
          <div className="w-[24px] h-[24px] bg-[#7F55DA]"></div>
          <span className=" font-Poppins text-[12px] font-medium leading-6">
            States with mining locations
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryMap;
