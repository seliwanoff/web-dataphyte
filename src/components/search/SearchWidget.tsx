import React from "react";
import { useLocation } from "react-router-dom";
import EachComponent from "./SearchEachComponent";
import MiningSearchWidget from "./MiningSeachWidget";
import CompanySearchWidget from "./CompnySearchWidget";
import Maintable from "../../Search/mainTableSearch";
import DocumentSearchMobileWidget from "./DocumentMobileSearchWidget";

interface SearchWidgetProps {
  title?: string;
}

const SearchWidget: React.FC<SearchWidgetProps> = ({ title }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || title || "Default Title";

  return (
    <div className="w-full max-w-[1750px] flex flex-col gap-[40px] border-b-2 border-[#cecece] mx-auto pb-[32px] pt-[32px]">
      <div className="flex flex-col gap-[24px]">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins">
          {title}
        </span>

        <div className="flex flex-wrap gap-[24px]">
          {title === "Minerals" ? (
            <EachComponent
              mineralName={queryName}
              countries="Nigeria, Ghana"
              miningCount={4}
              docCount={1500}
            />
          ) : title === "Mining Sites" ? (
            <>
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />{" "}
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />{" "}
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />{" "}
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />{" "}
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />{" "}
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />{" "}
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />{" "}
              <MiningSearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={1500}
              />
            </>
          ) : title === "Documents" ? (
            <>
              <div className="xl:block hidden w-full">
                <Maintable />
              </div>
              <div className="xl:hidden block w-full">
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
            </>
          ) : title === "Companies" ? (
            <>
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
              <CompanySearchWidget
                mineralName={"Dataphyte Colbalt mining site"}
                countries="Nigeria, Ghana"
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
            </>
          ) : (
            <>
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
              <EachComponent
                mineralName={queryName}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
