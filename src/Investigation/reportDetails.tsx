import { useState } from "react";
import ButtonEl from "../components/buttonEl";
import CountryTitle from "../components/country/CuntryTitle";
import EachNewsCard from "../components/eachNewCards";
import SearchBar from "../components/search/search";

const ReportDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full px-[24px] xl:px-[100px] py-[32px]">
      <div className="flex w-full xl:flex-row flex-col justify-end xl:justify-end xl:items-start items-end gap-8 mb-5 xl:mb-0 ">
        <CountryTitle />

        <ButtonEl
          link={"/reports/form"}
          selectedCountry={""}
          selectedContinent={""}
          text="Submit Report"
        />
      </div>
      <div className="border-t-2 border-[#cecece] w-full mt-2"></div>

      <div className="flex flex-col gap-[40px]">
        <div className="flex items-center xl:flex-row flex-col gap-6 justify-between mt-3">
          <h3 className="text-[#161616] text-[32px] font-semibold leading-[44.29px] text-left font-polySans">
            Investigations and Reports
          </h3>
          <SearchBar
            style=""
            bg="bg-[#f0f0f0]"
            border="border border-[#ccc]"
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className=" flex  items-center w-full gap-6   flex-wrap  relative ">
          <EachNewsCard />
          <EachNewsCard />
          <EachNewsCard />
          <EachNewsCard />
          <EachNewsCard />
          <EachNewsCard />
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
