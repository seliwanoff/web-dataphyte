import React, { useEffect, useState } from "react";
import ButtonEl from "../components/buttonEl";
import SelectEl from "../components/selectEl";
import { continents } from "../components/country/allCountry";

// Define the types for the props
interface RegulationFormProps {
  buttonLink: string;
  onSubmit?: (selectedContinent: string, selectedCountry: string) => void;
  text?: string;
  setSelectedCountrys?: any;
  setSelectedContinents?: any;
}

const RegulationForm: React.FC<RegulationFormProps> = ({
  buttonLink,
  onSubmit,
  text,
  setSelectedCountrys,
  setSelectedContinents,
}) => {
  const [selectedContinent, setSelectedContinent] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const countries =
    continents.find((c) => c.continent === selectedContinent)?.countries || [];
  useEffect(() => {
    const handleSubmit = () => {
      setSelectedCountrys && setSelectedCountrys(selectedCountry);
      setSelectedContinents && setSelectedContinents(selectedContinent);
    };
    handleSubmit();
  }, [selectedContinent, selectedCountry]);

  return (
    <div className="flex flex-col gap-[50px]">
      <SelectEl
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        countries={countries}
        text={text}
      />
      <ButtonEl
        link={buttonLink}
        selectedCountry={selectedCountry}
        selectedContinent={selectedContinent}
        text="Continue"
      />
    </div>
  );
};

export default RegulationForm;
