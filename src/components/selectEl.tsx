import { Dispatch, SetStateAction, useState } from "react";
import chevron_down from "../assets/images/chevron-down.png";
// import { continents } from "./country/allCountry"; // Commented out
import ContinentDropDown from "./country/continentDropdown";
import CountryDownList from "./country/countryDownList";

type Country = {
  name: string;
  code: string;
};

// Define a fixed array for countries
const predefinedCountries: Country[] = [
  { name: "Nigeria", code: "NG" },
  { name: "Ghana", code: "GH" },
  { name: "Dr Congo", code: "DR" },
  { name: "Mozambique", code: "MZ" },
];

type SelectElProps = {
  selectedContinent: string;
  setSelectedContinent: Dispatch<SetStateAction<string>>;
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  countries?: Country[]; // Optional since we're using predefinedCountries
  text?: string;
};

const SelectEl: React.FC<SelectElProps> = ({
  selectedContinent,
  setSelectedContinent,
  selectedCountry,
  setSelectedCountry,
  countries = predefinedCountries, // Default to predefined countries
  text,
}) => {
  const [showContinentDrop, setShowContinentDrop] = useState<boolean>(false);
  const [showCountryDrop, setShowCountryDrop] = useState<boolean>(false);

  const handleMainDropdownClick = () => {
    // If country dropdown is open, close it
    if (showCountryDrop) {
      setShowCountryDrop(false);
    } else {
      // Toggle country dropdown
      setShowCountryDrop((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col gap-3 relative">
      <label
        htmlFor="country"
        className="font-Inter text-[14px] font-medium leading-5 text-[#344053]"
      >
        {text !== "" ? text : "Select Country"}
      </label>
      <div
        className="w-full max-w-[320px] border py-[10px] px-[14px] rounded-md flex items-center justify-between select-shadow cursor-pointer"
        onClick={handleMainDropdownClick}
      >
        <section className="w-full font-Inter text-[16px] font-normal leading-6 text-[#667085]">
          {selectedCountry || "Select country"}
        </section>
        <img src={chevron_down} alt="" className="h-[20px]" />
      </div>

      {showCountryDrop && predefinedCountries.length > 0 && (
        <CountryDownList
          title="Select a Country"
          items={predefinedCountries}
          selectedItem={selectedCountry}
          onSelect={(countryName) => {
            setSelectedCountry(countryName);
            setShowCountryDrop(false); // Hide country dropdown after selecting a country
          }}
        />
      )}
    </div>
  );
};

export default SelectEl;
