import React, { useRef, useEffect, useState, useMemo } from "react";
import * as d3 from "d3";
import worldData from "../../data/custom.geo.json";
import RegulationForm from "../../Regulation/regualtionForm";
import africa from "../../data/africa.geo.json";
import asia from "../../data/asia.geo.json";
import NorthAmerica from "../../data/north-america.geo.json";
import SouthAmerica from "../../data/south-america.geo.json";
import Europe from "../../data/europe.geo.json";
import Oceania from "../../data/oceania.geo.json";
import Nigeria from "../../data/countriesdata/nigeria.json";
import { FeatureCollection, Feature, Geometry } from "geojson";
import { useNavigate } from "react-router-dom";

interface GeoProperties {
  CONTINENT?: string;
  country?: string;
  lat?: number;
  lon?: number;

  name?: string;
  [key: string]: any;
}

type GeoFeature = Feature<Geometry, GeoProperties>;

const worldGeoData = worldData as unknown as FeatureCollection<
  Geometry,
  GeoProperties
>;

const continentGeoDataMap: Record<
  string,
  FeatureCollection<Geometry, GeoProperties>
> = {
  Africa: africa as FeatureCollection<Geometry, GeoProperties>,
  Asia: asia as FeatureCollection<Geometry, GeoProperties>,
  "North America": NorthAmerica as FeatureCollection<Geometry, GeoProperties>,
  "South America": SouthAmerica as FeatureCollection<Geometry, GeoProperties>,
  Europe: Europe as FeatureCollection<Geometry, GeoProperties>,
  Oceania: Oceania as FeatureCollection<Geometry, GeoProperties>,
};

const countryGeoDataMap: Record<
  string,
  FeatureCollection<Geometry, GeoProperties>
> = {
  Nigeria: Nigeria as FeatureCollection<Geometry, GeoProperties>,
};

const InteractiveMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(
    null
  );
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [countryLatLng, setCountryLatLng] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const navigate = useNavigate();

  const miningContinent = [
    "Africa",
    "Nigeria",
    "Mozambique",
    "Ghana",
    "Democratic Republic of the Congo",
  ];

  const miningCompany = [
    "Nigeria",
    "Mozambique",
    "Ghana",
    "Democratic Republic of the Congo",
  ];

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const baseWidth = 800;
    const baseHeight = 400;

    const geoData: FeatureCollection<Geometry, GeoProperties> =
      selectedCountry && countryGeoDataMap[selectedCountry]
        ? countryGeoDataMap[selectedCountry]
        : selectedContinent && continentGeoDataMap[selectedContinent]
        ? continentGeoDataMap[selectedContinent]
        : worldGeoData;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${baseWidth} ${baseHeight}`)
      .style("width", "100%")
      .style("height", "auto");

    const projection = d3
      .geoMercator()
      .fitSize([baseWidth, baseHeight], geoData);
    const pathGenerator = d3.geoPath().projection(projection);

    svg
      .selectAll<SVGPathElement, GeoFeature>("path")
      .data(geoData.features)
      .join("path")
      .text("Text")
      .attr("d", pathGenerator)
      .attr("fill", (d) => {
        if (!selectedContinent) {
          return miningContinent.includes(d.properties.continent)
            ? "#7F55DA"
            : "#272727";
        }

        if (selectedContinent) {
          return miningCompany.includes(d.properties.geounit)
            ? "#7F55DA"
            : "#272727";
        }

        return "#272727";
      })
      .attr("stroke", (d) =>
        miningContinent.includes(d.properties.continent) && !selectedContinent
          ? "#7F55DA"
          : "#FFFFFF"
      )
      .on("click", (event, d) => {
        if (!selectedContinent) {
          const continent = d.properties.continent;
          setSelectedContinent(continent);
        } else if (!selectedCountry) {
          const country = d.properties.geounit;

          if (miningCompany.includes(country)) {
            navigate(
              `/interactive-country?c=${
                country === "Democratic Republic of the Congo"
                  ? "Dr Congo"
                  : country
              }`
            );
          }

          setSelectedCountry(country);
          setCountryLatLng({
            lat: d.properties.lat ?? 0,
            lon: d.properties.lon ?? 0,
          });
        }
      });
  }, [selectedContinent, selectedCountry, navigate]);

  const resetMap = () => {
    if (selectedCountry) {
      setSelectedCountry(null);
    } else if (selectedContinent) {
      setSelectedContinent(null);
    }
  };

  return (
    <div className="w-full">
      <div className="mt-[100px] w-full lg:p-[30px] p-4 rounded-[30px] bg-[#f0f0f0]">
        <svg
          ref={svgRef}
          style={{
            cursor: "pointer",
          }}
        ></svg>
        <div className="lg:text-[32px] text-[16px] font-semibold text-right text-[#8B5CF6]">
          {selectedCountry || selectedContinent || ""}
        </div>
      </div>
      {(selectedContinent || selectedCountry) && (
        <button
          onClick={resetMap}
          className="mt-4 px-4 py-2 bg-[#8B5CF6] text-white rounded-md font-polySans"
        >
          Go Back
        </button>
      )}
      <div className="flex gap-[38px] items-center mt-11">
        <div className="border border-[#656565] inline-block w-full"></div>
        <span className="font-Poppins text-[16px] font-medium leading-6 text-center text-[#202020]">
          OR
        </span>
        <div className="border border-[#656565] inline-block w-full"></div>
      </div>
      <div className="w-full mt-10">
        <RegulationForm
          setSelectedContinents={setSelectedContinent}
          setSelectedCountrys={setSelectedCountry}
          buttonLink={`/interactive-country`}
          text="Pick preferred region"
        />
      </div>
    </div>
  );
};

export default InteractiveMap;
