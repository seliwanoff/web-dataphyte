import FilterLicense from "../components/license/filter";
import LicenseText from "../components/license/licenseText";

const LicenseWrapper = () => {
  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <LicenseText />
        <div className="flex flex-col gap-[24px] border border-red-600">
          <FilterLicense />
        </div>
      </div>
    </div>
  );
};

export default LicenseWrapper;
