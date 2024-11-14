import React, { useRef, useEffect, useState, useMemo } from "react";
import * as d3 from "d3";
import worldData from "../../data/custom.geo.json";
import Continentdata from "../../data/continents.json";
import RegulationForm from "../../Regulation/regualtionForm";
import { FeatureCollection, Feature, Geometry } from "geojson";

interface GeoProperties {
  CONTINENT: string;
  lat?: number;
  lon?: number;
  [key: string]: any;
}

type GeoFeature = Feature<Geometry, GeoProperties>;

// Explicitly assert imported data as FeatureCollection
const worldGeoData = worldData as unknown as FeatureCollection<
  Geometry,
  GeoProperties
>;
const continentGeoData = Continentdata as unknown as FeatureCollection<
  Geometry,
  GeoProperties
>;

const InteractiveMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<string | null>(
    null
  );
  const [countryLatLng, setCountryLatLng] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [selectedRegionData, setSelectedRegionData] =
    useState<GeoFeature | null>(null); // Store selected region data

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const baseWidth = 800;
    const baseHeight = 400;

    // Set geoData with type assertion for filtered features
    const geoData: FeatureCollection<Geometry, GeoProperties> = {
      type: "FeatureCollection",
      features: selectedContinent
        ? (continentGeoData.features.filter(
            (feature: GeoFeature) =>
              feature.properties.CONTINENT === selectedContinent
          ) as GeoFeature[])
        : worldGeoData.features,
    };

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${baseWidth} ${baseHeight}`)
      .style("width", "100%")
      .style("height", "auto");

    const projection = d3
      .geoMercator()
      .fitSize([baseWidth, baseHeight], geoData);
    const pathGenerator = d3.geoPath().projection(projection);

    const colorScale = (region: string | null) =>
      selectedRegion === region ? "black" : "#272727";

    svg
      .selectAll<SVGPathElement, GeoFeature>("path")
      .data(geoData.features)
      .join("path")
      .attr("d", pathGenerator)
      .attr("fill", (d) => colorScale(d.properties.CONTINENT))
      .attr("stroke", "#FFFFFF")
      .on("click", (event, d) => {
        console.log(d);
        const region = d.properties.continent || d.properties.region_un;
        setSelectedRegion(region);
        setSelectedContinent(region);

        const lat = d.properties.lat ?? 0;
        const lon = d.properties.lon ?? 0;
        setCountryLatLng({ lat, lon });

        setSelectedRegionData(d);
      });

    if (!selectedRegion) {
      svg
        .transition()
        .duration(1000)
        .attr("viewBox", `0 0 ${baseWidth} ${baseHeight}`);
    }
  }, [selectedRegion, selectedContinent]);
  console.log(selectedContinent);
  const generateGoogleMapsUrl = useMemo(() => {
    const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    return countryLatLng
      ? `https://www.google.com/maps/embed/v1/view?key=${googleMapApiKey}&center=${countryLatLng.lat},${countryLatLng.lon}&zoom=10`
      : "";
  }, [countryLatLng]);

  return (
    <div className="w-full">
      <div className="mt-[100px] w-full p-[30px] rounded-[30px] bg-[#f0f0f0]">
        <h3 className="pb-[30px] text-[#161616] text-[32px] font-semibold font-polySans text-left">
          Select Region
        </h3>
        <svg ref={svgRef}></svg>

        {selectedContinent && (
          <div className="text-[32px] font-semibold leading-[44.29px] text-end text-[#8B5CF6] font-polySans">
            {" "}
            {selectedContinent}
          </div>
        )}
      </div>
      <div className="flex gap-[38px] items-center mt-11">
        <div className="border border-[#656565] inline-block w-full"></div>
        <span className="font-Poppins text-[16px] font-medium leading-6 text-center text-[#202020]">
          OR
        </span>
        <div className="border border-[#656565] inline-block w-full"></div>
      </div>
      {/**
      {countryLatLng && (
        <div className="w-full mt-10">
          <iframe
            src={generateGoogleMapsUrl}
            width="100%"
            height="693"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
        */}

      {/*
      {selectedRegionData && (
        <div className="w-full mt-10">
          <h4 className="text-[18px] font-semibold">Region Data:</h4>
          <pre className="bg-[#f5f5f5] p-[15px] rounded-[10px]">
            {JSON.stringify(selectedRegionData, null, 2)}
          </pre>
        </div>
      )}
        */}

      <div className="w-full mt-10">
        <RegulationForm
          buttonLink="javascript:void(0)"
          text="Pick preferred region"
        />
      </div>
    </div>
  );
};

export default InteractiveMap;
