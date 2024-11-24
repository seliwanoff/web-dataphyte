import { useState } from "react";
import MapComponent from "../components/country/countryMap";
import CountryMap from "../components/country/countryMap";
import CountryStatistics from "../components/country/CountryStatistics";
import CountryTitle from "../components/country/CuntryTitle";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";
import SearchBar from "../components/search/search";
import Maintable from "../Search/mainTableSearch";

const RegulationProfile = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full px-[24px] xl:px-[100px] py-[32px]">
      <div className="flex xl:flex-row flex-col w-full">
        <CountryTitle />

        <SearchBar
          border="border border-[#CCCCCC]"
          bg="bg-[#f0f0f0]"
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div className="w-full mt-[46px]">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins ">
          Documents
        </span>
        <div className="xl:block hidden w-full mt-[32px]">
          <Maintable datas={[]} />
        </div>
        <div className="xl:hidden block w-full mt-[32px]">
          <DocumentSearchMobileWidget
            mineralName={"Dataphyte Colbalt mining site"}
            countries="Nigeria, Ghana"
            miningCount={4}
            mineral={"Maganese"}
            docCount={5}
          />
          <DocumentSearchMobileWidget
            mineralName={"Dataphyte Colbalt mining site"}
            countries="Nigeria, Ghana"
            miningCount={4}
            mineral={"Maganese"}
            docCount={5}
          />{" "}
          <DocumentSearchMobileWidget
            mineralName={"Dataphyte Colbalt mining site"}
            countries="Nigeria, Ghana"
            miningCount={4}
            mineral={"Maganese"}
            docCount={5}
          />{" "}
          <DocumentSearchMobileWidget
            mineralName={"Dataphyte Colbalt mining site"}
            countries="Nigeria, Ghana"
            miningCount={4}
            mineral={"Maganese"}
            docCount={5}
          />{" "}
          <DocumentSearchMobileWidget
            mineralName={"Dataphyte Colbalt mining site"}
            countries="Nigeria, Ghana"
            miningCount={4}
            mineral={"Maganese"}
            docCount={5}
          />{" "}
          <DocumentSearchMobileWidget
            mineralName={"Dataphyte Colbalt mining site"}
            countries="Nigeria, Ghana"
            miningCount={4}
            mineral={"Maganese"}
            docCount={5}
          />{" "}
          <DocumentSearchMobileWidget
            mineralName={"Dataphyte Colbalt mining site"}
            countries="Nigeria, Ghana"
            miningCount={4}
            mineral={"Maganese"}
            docCount={5}
          />
        </div>
      </div>
    </div>
  );
};

export default RegulationProfile;
