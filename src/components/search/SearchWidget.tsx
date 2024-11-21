import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import EachComponent from "./SearchEachComponent";
import MiningSearchWidget from "./MiningSeachWidget";
import CompanySearchWidget from "./CompnySearchWidget";
import Maintable from "../../Search/mainTableSearch";
import DocumentSearchMobileWidget from "./DocumentMobileSearchWidget";
import PeopleSearchWidget from "./peopleSearch";

interface SearchWidgetProps {
  title?: string;
  datas?: any;
  miningSite?: any;
  company?: any;
  document?: any;
  people?: any;
  mineral?: any;
}

const SearchWidget: React.FC<SearchWidgetProps> = ({
  title,
  datas,
  miningSite,
  company,
  document,
  people,
  mineral,
}) => {
  //console.log(people);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || title || "Default Title";

  const ceoAndCfo = [datas.data.ceo, datas.data.cfo, datas.data.cto].map(
    (person, index) => ({
      id: person.id,
      name: `${person.title} ${person.first_name} ${person.last_name}`,
      image: person.image,
      location: person.location,
      country: person.country,
      role: index === 0 ? "CEO" : "CFO", // Assign roles dynamically
    })
  );

  return (
    <div
      className={`w-full max-w-[1750px] flex flex-col gap-[40px] ${
        title === "All" ? "" : " border-b-2 border-[#cecece]"
      } mx-auto pb-[32px] pt-[32px]`}
    >
      <div className="flex flex-col gap-[24px]">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins">
          {title === "All" ? "" : title}
        </span>

        <div className="flex flex-wrap gap-[24px]">
          {title === "Minerals" ? (
            mineral.data.map((data: any, index: any) => (
              <EachComponent
                key={index}
                mineralName={data.name}
                countries="Nigeria, Ghana"
                miningCount={4}
                docCount={1500}
              />
            ))
          ) : title === "People" ? (
            people.data.map((data: any, index: any) => (
              <PeopleSearchWidget
                mineralName={data.name}
                countries={`${data.location}, ${data.country}`}
                miningCount={4}
                mineral={"Dataphyte Limited"}
                docCount={1500}
                key={index}
                role={data.role}
              />
            ))
          ) : title === "Mining Sites" ? (
            miningSite?.data.map((data: any, index: any) => (
              <MiningSearchWidget
                mineralName={data.name}
                countries={data.country}
                miningCount={4}
                mineral={"Cobalt"}
                docCount={1500}
              />
            ))
          ) : title === "Documents" ? (
            <>
              <div className="xl:block hidden w-full">
                <Maintable datas={document} />
              </div>
              <div className="xl:hidden block w-full">
                {document.data.length > 0 &&
                  document?.data?.map((data: any, index: any) => (
                    <DocumentSearchMobileWidget
                      mineralName={data.name}
                      countries={data.location}
                      miningCount={4}
                      mineral={"Maganese"}
                      docCount={5}
                      type={data.type}
                      key={index}
                    />
                  ))}
              </div>
            </>
          ) : title === "Companies" ? (
            company?.data.map((data: any, index: any) => (
              <CompanySearchWidget
                mineralName={data.name}
                countries={data.country}
                miningCount={4}
                mineral={"Maganese"}
                docCount={5}
              />
            ))
          ) : (
            title === "Subsidiaries" && (
              <>
                {datas?.data.children.map((data: any, index: any) => (
                  <EachComponent
                    mineralName={data.name}
                    countries={data.country}
                    miningCount={4}
                    docCount={1500}
                    key={index}
                  />
                ))}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
