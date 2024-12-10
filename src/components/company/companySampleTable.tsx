import { useLocation } from "react-router-dom";

import peopleSampleData from "../../data/peopleSampleResponse.json";
import PeopleWidget from "../search/peopleWidget";
import SearchWidget from "../search/SearchWidget";
interface SeachTableFormatProps {
  widgetTitles: string[];
  currentTab: string;
  datas?: any;
  miningSite?: any;
  company?: any;
  document?: any;
  people?: any;
  mineral?: any;
}

const CompanyTableFormat: React.FC<SeachTableFormatProps> = ({
  widgetTitles,
  currentTab,
  datas,
  miningSite,
  company,
  document,
  people,
  mineral,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "Default Title";
  const pathname = location.pathname;
  const ceoAndCfo = [datas.data.ceo, datas.data.cfo, datas.data.cto].map(
    (person, index) => ({
      id: person.id,
      name: `${person.title} ${person.first_name} ${person.last_name}`,
      image: person.image,
      location: person.location,
      country: person.country,
      role: index === 0 ? "CEO" : index === 1 ? "CTO" : "CFO", // Assign roles dynamically
    })
  );
  return (
    <div className="w-full max-w-[1750px] mx-auto xl:px-[110px] px-[24px]">
      {currentTab === "All"
        ? widgetTitles.map((title, index) =>
            pathname === "/people" ? (
              <PeopleWidget
                key={index}
                title={title}
                datas={peopleSampleData}
              />
            ) : (
              <SearchWidget
                key={index}
                title={title}
                datas={datas}
                company={
                  pathname === "/company-profile" ? { data: {} } : company
                }
                miningSite={miningSite || []}
                document={
                  pathname === "/company-profile"
                    ? { data: datas.data.document }
                    : document
                }
                people={
                  pathname === "/company-profile" ? { data: ceoAndCfo } : people
                }
                mineral={
                  pathname === "/company-profile"
                    ? { data: datas.data.mineral }
                    : mineral
                }
              />
            )
          )
        : widgetTitles
            .filter((title) => title === currentTab)
            .map((title, index) =>
              pathname === "/people" ? (
                <PeopleWidget
                  key={index}
                  title={title}
                  datas={peopleSampleData}
                />
              ) : (
                <SearchWidget
                  key={index}
                  title={title}
                  datas={datas}
                  company={
                    pathname === "/company-profile" ? { data: {} } : company
                  }
                  miningSite={miningSite || []}
                  document={
                    pathname === "/company-profile"
                      ? { data: datas.data.document }
                      : document
                  }
                  people={
                    pathname === "/company-profile"
                      ? { data: ceoAndCfo }
                      : people
                  }
                  mineral={
                    pathname === "/company-profile"
                      ? { data: datas.data.mineral }
                      : mineral
                  }
                />
              )
            )}
    </div>
  );
};

export default CompanyTableFormat;
