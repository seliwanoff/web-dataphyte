import { useState } from "react";
import FilterLicense from "../components/license/filter";
import LicenseText from "../components/license/licenseText";
import PageSearch from "../components/PageSearch";
import LicenseMainTable from "./LicenseMaintable";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";

const LicenseWrapper = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mainDoc, setInnerMainDoc] = useState<any>();
  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <LicenseText />
        <div className="flex xl:flex-row  flex-col items-center gap-[24px]">
          {/***
          <FilterLicense />
          */}
          <PageSearch setSearchQuery={setSearchQuery} />
        </div>
        <div className="xl:block hidden">
          <LicenseMainTable
            searchQuery={searchQuery}
            setInnerMainDoc={setInnerMainDoc}
          />
        </div>

        <div className="xl:hidden block w-full mt-[32px]">
          {mainDoc?.length > 0 &&
            mainDoc
              ?.filter((item: any) => item.category === "License")
              .map((item: any, index: any) => (
                <DocumentSearchMobileWidget
                  mineralName={item?.name}
                  countries={item.country}
                  miningCount={4}
                  type={item.type}
                  mineral={"Maganese"}
                  docCount={5}
                  link={item.id}
                  key={index}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default LicenseWrapper;
