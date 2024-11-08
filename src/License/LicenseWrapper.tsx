import FilterLicense from "../components/license/filter";
import LicenseText from "../components/license/licenseText";
import PageSearch from "../components/PageSearch";
import LicenseMainTable from "./LicenseMaintable";

const LicenseWrapper = () => {
  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <LicenseText />
        <div className="flex xl:flex-row  flex-col items-center gap-[24px]">
          <FilterLicense />
          <PageSearch />
        </div>

        <LicenseMainTable />
      </div>
    </div>
  );
};

export default LicenseWrapper;
