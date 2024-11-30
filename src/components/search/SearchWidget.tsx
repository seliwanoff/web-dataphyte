import React from "react";
import { useLocation } from "react-router-dom";
import EachComponent from "./SearchEachComponent";
import MiningSearchWidget from "./MiningSeachWidget";
import CompanySearchWidget from "./CompnySearchWidget";
import Maintable from "../../Search/mainTableSearch";
import DocumentSearchMobileWidget from "./DocumentMobileSearchWidget";
import PeopleSearchWidget from "./peopleSearch";
import parseCountry from "../parseCountry";

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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || title || "Default Title";

  const parseData = (data: any) => parseCountry(data);
  const mineralCount = (mineral.data && mineral?.data.length) || 0;
  const documentCount = (document.data && document?.data.length) || 0;

  const hasData = () => {
    switch (title) {
      case "Minerals":
        return mineral?.data?.length > 0;
      case "People":
        return people?.data?.length > 0;
      case "Mining Sites":
        return miningSite?.data?.length > 0;
      case "Documents":
        return document?.data?.length > 0;
      case "Companies":
        return company?.data?.length > 0;
      case "Subsidiaries":
        return datas?.data?.children?.length > 0;
      default:
        return false;
    }
  };

  if (!hasData()) return null;

  return (
    <div className="w-full border-b-2 border-[#cecece] mx-auto pb-[32px] pt-[32px]">
      <div className="flex flex-col gap-[24px]">
        {title && (
          <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins">
            {title}
          </span>
        )}

        <div className="flex flex-wrap gap-[24px]">
          {title === "Minerals" &&
            mineral?.data?.map((data: any, index: number) => (
              <EachComponent
                key={index}
                mineralName={data.name}
                image={data.image}
                countries={parseData(data)}
                miningCount={(data?.site && data?.site?.length) || 0}
                docCount={(data?.document && data?.document?.length) || 0}
                id={data.id}
              />
            ))}

          {title === "People" &&
            people?.data?.map((data: any, index: number) => (
              <PeopleSearchWidget
                key={index}
                mineralName={`${data.first_name} ${data.last_name}`}
                countries={parseData(data)}
                miningCount={4}
                image={data.image}
                mineral={
                  data.ceo && data.ceo
                    ? data?.ceo[0]?.name
                    : data?.cfo && data?.cfo
                    ? data?.cfo[0]?.name
                    : (data?.cto && data?.cto[0]?.name) || null
                }
                docCount={documentCount}
                role={
                  data.ceo?.length > 0
                    ? "CEO"
                    : data?.cfo?.length > 0
                    ? "CFO"
                    : data.cto?.length > 0
                    ? "CTO"
                    : ""
                }
                id={data.id}
              />
            ))}

          {title === "Mining Sites" &&
            miningSite?.data?.map((data: any, index: number) => (
              <MiningSearchWidget
                key={index}
                mineralName={data.name}
                countries={parseData(data)}
                miningCount={(data?.mineral && data?.mineral?.length) || 0}
                mineral={data?.mineral[0].name}
                docCount={(data?.document && data?.document?.length) || 0}
                id={data.id}
              />
            ))}

          {title === "Documents" && (
            <>
              <div className="xl:block hidden w-full">
                <Maintable datas={document} />
              </div>
              <div className="xl:hidden block w-full">
                {document?.data?.map((data: any, index: number) => (
                  <DocumentSearchMobileWidget
                    mineralName={data.name}
                    countries={JSON.parse(data.meta)}
                    miningCount={4}
                    mineral={"Maganese"}
                    docCount={5}
                    type={data.type}
                    key={index}
                  />
                ))}
              </div>
            </>
          )}

          {title === "Companies" &&
            company?.data?.map((data: any, index: number) => (
              <CompanySearchWidget
                key={index}
                mineralName={data.name}
                countries={parseData(data)}
                miningCount={data?.mineral?.length}
                docCount={data?.document?.length}
                id={data.id}
              />
            ))}

          {title === "Subsidiaries" &&
            datas?.data?.children?.map((data: any, index: number) => (
              <EachComponent
                key={index}
                mineralName={data.name}
                countries={parseData(data)}
                miningCount={0}
                docCount={0}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
