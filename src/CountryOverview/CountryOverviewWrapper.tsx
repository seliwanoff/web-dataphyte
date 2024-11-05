import MapComponent from "../components/country/countryMap";
import CountryMap from "../components/country/countryMap";
import CountryStatistics from "../components/country/CountryStatistics";
import CountryTitle from "../components/country/CuntryTitle";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";
import Maintable from "../Search/mainTableSearch";

const CountryOveViewWrapper = () => {
  return (
    <div className="w-full px-[24px] xl:px-[100px] py-[32px]">
      <CountryTitle />
      <CountryStatistics />

      <MapComponent />

      <div className="w-full mt-[46px]">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins ">
          Documents
        </span>
        <div className="xl:block hidden w-full mt-[32px]">
          <Maintable />
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

export default CountryOveViewWrapper;
