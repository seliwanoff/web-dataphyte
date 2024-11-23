import React from "react";
import { useLocation } from "react-router-dom";
import EachComponent from "./SearchEachComponent";
import MiningSearchWidget from "./MiningSeachWidget";
import CompanySearchWidget from "./CompnySearchWidget";
import DocumentSearchMobileWidget from "./DocumentMobileSearchWidget";
import PeopleSearchWidget from "./peopleSearch";
import PeopleMaintable from "../table/PeopleMaintable";
import parseCountry from "../parseCountry";

interface SearchWidgetProps {
  title?: string;
  datas?: any;
}

const PeopleWidget: React.FC<SearchWidgetProps> = ({ title, datas }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || title || "Default Title";

  const combined = [
    ...(datas?.data?.ceo?.map((persons: any) => ({
      ...persons,
      role: "CEO",
    })) || []),
    ...(datas?.data?.cfo?.map((persons: any) => ({
      ...persons,
      role: "CFO",
    })) || []),
    ...(datas?.data?.cto?.map((persons: any) => ({
      ...persons,
      role: "CTO",
    })) || []),
  ];

  const ceoAndCfo = combined.map((person: any) => ({
    id: person.id,
    name: person.name,
    image: person.image,
    location: person.location,
    country: person.country,
    role: person.role,
  }));

  const hasData = (title: string) => {
    switch (title) {
      case "Minerals":
        return datas?.data?.mineral?.length > 0;
      case "People":
        return ceoAndCfo.length > 0;
      case "Mining Sites":
        return datas?.data?.site?.length > 0;
      case "Documents":
        return datas?.data?.document?.length > 0;
      case "Companies":
        return ceoAndCfo.length > 0;
      case "Mining Type":
        return datas?.data?.miningtype?.length > 0;
      default:
        return false;
    }
  };

  const renderByTitle = () => {
    switch (title) {
      case "Minerals":
        return (
          datas?.data?.mineral?.map((data: any, index: number) => (
            <EachComponent
              key={index}
              mineralName={data.name}
              countries="Nigeria, Ghana"
              miningCount={4}
              docCount={1500}
            />
          )) || null
        );

      case "People":
        return (
          ceoAndCfo.map((data: any, index: number) => (
            <PeopleSearchWidget
              key={index}
              mineralName={data.name}
              countries={`${parseCountry(data)}`}
              miningCount={4}
              mineral={"Dataphyte Limited"}
              docCount={1500}
              role={data.role}
              id={data.id}
            />
          )) || null
        );

      case "Mining Sites":
        return (
          datas?.data?.site?.map((data: any, index: number) => (
            <MiningSearchWidget
              key={index}
              mineralName={data.name}
              countries={parseCountry(data)}
              miningCount={4}
              mineral={data.mineral}
              docCount={1500}
              id={data.id}
            />
          )) || null
        );

      case "Documents":
        return (
          <>
            {datas?.data?.document && (
              <>
                <div className="xl:block hidden w-full">
                  <PeopleMaintable datas={datas} />
                </div>
                <div className="xl:hidden block w-full">
                  {datas.data.document.map((data: any, index: number) => (
                    <DocumentSearchMobileWidget
                      key={index}
                      mineralName={data.name}
                      countries={data.location}
                      miningCount={4}
                      mineral={"Maganese"}
                      docCount={5}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        );

      case "Companies":
        return (
          ceoAndCfo.map((data: any, index: number) => (
            <CompanySearchWidget
              key={index}
              mineralName={data.name}
              countries={`${parseCountry(data)}`}
              miningCount={4}
              mineral={"Dataphyte Limited"}
              docCount={1500}
              role={data.role}
              id={data.id}
            />
          )) || null
        );

      case "Mining Type":
        return (
          datas?.data?.miningtype?.map((data: any, index: number) => (
            <EachComponent
              key={index}
              mineralName={data.name}
              countries={parseCountry(data)}
              miningCount={4}
              docCount={1500}
            />
          )) || null
        );

      default:
        return null;
    }
  };

  return hasData(title || "") ? (
    <div
      className={`w-full max-w-[1750px] flex flex-col gap-[40px] ${
        title === "All" ? "" : "border-b-2 border-[#cecece]"
      } mx-auto pb-[32px] pt-[32px]`}
    >
      <div className="flex flex-col gap-[24px]">
        {title !== "All" && (
          <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins">
            {title}
          </span>
        )}
        <div className="flex flex-wrap gap-[24px]">{renderByTitle()}</div>
      </div>
    </div>
  ) : null;
};

export default PeopleWidget;
