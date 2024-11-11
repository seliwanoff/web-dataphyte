import { Dispatch, SetStateAction, useState } from "react";
import chevron_down from "../assets/images/chevron-down.png";
import { continents } from "./country/allCountry";
import ContinentDropDown from "./country/continentDropdown";
import CountryDownList from "./country/countryDownList";

type Country = {
  name: string;
  code: string;
};

type Continent = {
  continent: string;
  countries: Country[];
};

type SelectElProps = {
  selectedContinent: string;
  setSelectedContinent: Dispatch<SetStateAction<string>>;
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  countries: Country[];
};

const SelectEl: React.FC<SelectElProps> = ({
  selectedContinent,
  setSelectedContinent,
  selectedCountry,
  setSelectedCountry,
  countries,
}) => {
  const [showContinentDrop, setShowContinentDrop] = useState<boolean>(false);
  const [showCountryDrop, setShowCountryDrop] = useState<boolean>(false);

  const handleMainDropdownClick = () => {
    // If country dropdown is open, close it and open continent dropdown
    if (showCountryDrop) {
      setShowCountryDrop(false);
      setShowContinentDrop(true);
    } else {
      // Toggle continent dropdown
      setShowContinentDrop((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col gap-3 relative">
      <label
        htmlFor="country"
        className="font-Inter text-[14px] font-medium leading-5 text-[#344053]"
      >
        Select Country
      </label>
      <div
        className="w-full max-w-[320px] border py-[10px] px-[14px] rounded-md flex items-center justify-between select-shadow cursor-pointer"
        onClick={handleMainDropdownClick}
      >
        <section className="w-full font-Inter text-[16px] font-normal leading-6 text-[#667085]">
          {selectedCountry || selectedContinent || "Select country"}
        </section>
        <img src={chevron_down} alt="" className="h-[20px]" />
      </div>

      {showContinentDrop && (
        <ContinentDropDown
          data={continents}
          setSelectedContinent={(continent) => {
            setSelectedContinent(continent);
            setShowContinentDrop(false);
            setShowCountryDrop(true); // Show country dropdown after selecting a continent
          }}
        />
      )}

      {showCountryDrop && selectedContinent && countries.length > 0 && (
        <CountryDownList
          title={`Select a Country in ${selectedContinent}`}
          items={countries}
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
