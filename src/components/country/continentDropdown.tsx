import React, { useState } from "react";
import check from "../../assets/images/check.png";
import { continents } from "./allCountry";

type Country = {
  name: string;
  code: string;
};

type Continent = {
  continent: string;
  countries: Country[];
};

type ContinentDropDownProps = {
  data: Continent[];
  setSelectedContinent: (continent: string) => void;
};

const ContinentDropDown: React.FC<ContinentDropDownProps> = ({
  data,
  setSelectedContinent,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedContinentIndex, setSelectedContinentIndex] =
    useState<number>(-1);

  const handleCountrySelect = (continentName: string) => {
    setSelectedContinent(continentName);
  };

  return (
    <div className="w-full max-w-[400px] h-[320px] overflow-y-auto absolute top-[80px] rounded-md bg-[#fff] shadow-custom-1 border border-[#EAECF0] scrollbar-rounded">
      {data.map((continent, index) => (
        <div
          className={`h-[46px] w-full justify-between flex items-center cursor-pointer px-[10px] ${
            selectedContinentIndex === index ? "bg-[#f9fafb]" : ""
          } font-semibold`}
          key={index}
          onClick={() => {
            handleCountrySelect(continent.continent);
            setSelectedContinentIndex(index);
          }}
        >
          <span className="text-[#101828] font-Inter font-medium leading-6 text-left">
            {continent.continent}
          </span>
          {selectedContinentIndex === index && (
            <img src={check} alt="Selected" className="h-[20px]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ContinentDropDown;
