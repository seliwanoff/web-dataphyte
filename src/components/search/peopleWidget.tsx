import React from "react";
import { useLocation } from "react-router-dom";
import EachComponent from "./SearchEachComponent";
import MiningSearchWidget from "./MiningSeachWidget";
import CompanySearchWidget from "./CompnySearchWidget";
import DocumentSearchMobileWidget from "./DocumentMobileSearchWidget";
import PeopleSearchWidget from "./peopleSearch";
import PeopleMaintable from "../table/PeopleMaintable";

interface SearchWidgetProps {
  title?: string;
  datas?: any;
}
interface DataProps {
  minerals?: any[];
  documents?: any[];
  mineralType?: any[];
  location?: any[];
}
const PeopleWidget: React.FC<SearchWidgetProps> = ({ title, datas }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || title || "Default Title";
  const combined = [
    ...datas.data.ceo.map((persons: any) => ({ ...persons, role: "CEO" })),
    ...datas.data.cfo.map((persons: any) => ({ ...persons, role: "CFO" })),
    ...datas.data.cto.map((persons: any) => ({ ...persons, role: "CTO" })),
  ];

  const ceoAndCfo = combined.map((person, index) => ({
    id: person.id,
    name: `${person.name}`,
    image: person.image,
    location: person.location,
    country: person.country,
    role: person.role,
  }));

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
            datas.data.mineral.length > 0 ? (
              datas?.data.mineral.map((data: any, index: any) => (
                <EachComponent
                  key={index}
                  mineralName={data.name}
                  countries="Nigeria, Ghana"
                  miningCount={4}
                  docCount={1500}
                />
              ))
            ) : (
              <span className="font-polySans text-xl text-black text-center block w-full">
                No Data Fetch
              </span>
            )
          ) : title === "People" ? (
            ceoAndCfo.map((data: any, index: any) => (
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
            datas?.data.site.map((data: any, index: any) => (
              <MiningSearchWidget
                mineralName={data.name}
                countries={data.country}
                miningCount={4}
                mineral={data.mineral}
                docCount={1500}
              />
            ))
          ) : title === "Documents" ? (
            <>
              {datas.data?.document ? (
                <div className="xl:block hidden w-full">
                  <PeopleMaintable datas={datas} />
                </div>
              ) : (
                <span className="font-polySans text-xl text-black text-center  w-full xl:block hidden">
                  No Data Fetch
                </span>
              )}
              <div className="xl:hidden block w-full">
                {datas.data?.document ? (
                  datas?.data?.document.map((data: any, index: any) => (
                    <DocumentSearchMobileWidget
                      mineralName={data.name}
                      countries={data.location}
                      miningCount={4}
                      mineral={"Maganese"}
                      docCount={5}
                      key={index}
                    />
                  ))
                ) : (
                  <span className="font-polySans text-xl text-black text-center block w-full">
                    No Data Fetch
                  </span>
                )}
              </div>
            </>
          ) : title === "Companies" ? (
            ceoAndCfo.map((data: any, index: any) => (
              <CompanySearchWidget
                mineralName={data.name}
                countries={`${data.location}, ${data.country}`}
                miningCount={4}
                mineral={"Dataphyte Limited"}
                docCount={1500}
                key={index}
                role={data.role}
              />
            ))
          ) : (
            title === "Mining Type" && (
              <>
                {datas.data.miningtype ? (
                  datas?.data.miningtype.map((data: any, index: any) => (
                    <EachComponent
                      mineralName={data.name}
                      countries={data.country}
                      miningCount={4}
                      docCount={1500}
                      key={index}
                    />
                  ))
                ) : (
                  <span className="font-polySans text-xl text-black text-center block w-full">
                    No Data Fetch
                  </span>
                )}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleWidget;
