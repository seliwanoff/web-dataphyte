import MapComponent from "../components/country/countryMap";
import CountryMap from "../components/country/countryMap";
import CountryStatistics from "../components/country/CountryStatistics";
import CountryTitle from "../components/country/CuntryTitle";

const CountryOveViewWrapper = () => {
  return (
    <div className="w-full px-[24px] xl:px-[100px] py-[32px]">
      <CountryTitle />
      <CountryStatistics />

      <MapComponent />
    </div>
  );
};

export default CountryOveViewWrapper;
