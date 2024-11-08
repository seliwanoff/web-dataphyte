import { useState } from "react";
import ButtonEl from "../components/buttonEl";
import SelectEl from "../components/selectEl";
//import { continents } from "./country/allCountry";

import { continents } from "../components/country/allCountry";

const RegulationForm = () => {
  const [selectedContinent, setSelectedContinent] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const countries =
    continents.find((c) => c.continent === selectedContinent)?.countries || [];

  return (
    <div className="flex flex-col gap-[50px]">
      <SelectEl
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        countries={countries}
      />
      <ButtonEl
        selectedCountry={selectedCountry}
        selectedContinent={selectedContinent}
      />
    </div>
  );
};

export default RegulationForm;
