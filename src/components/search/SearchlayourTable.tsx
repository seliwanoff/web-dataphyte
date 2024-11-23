import { useLocation } from "react-router-dom";
import SearchWidget from "./SearchWidget";
import PeopleSearchWidget from "./peopleSearch";
import PeopleWidget from "./peopleWidget";
import peopleSampleData from "../../data/peopleSampleResponse.json";
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

const SeachTableFormat: React.FC<SeachTableFormatProps> = ({
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
  const pathname = location.pathname;

  const ceoAndCfo = [
    { role: "CEO", person: datas?.data?.ceo },
    { role: "CFO", person: datas?.data?.cfo },
    { role: "CTO", person: datas?.data?.cto },
  ]
    .filter((entry) => entry.person) // Filter out any roles that are missing
    .map(({ person, role }) => ({
      id: person.id,
      first_name: `${person.title} ${person.first_name}`,
      last_name: `${person.last_name}`,
      name: `${person.first_name} ${person.last_name} `,
      image: person.image,
      location: person.location,
      country: person.country,
      role,
    }));

  console.log(ceoAndCfo);

  return (
    <div className="w-full max-w-[1750px] mx-auto xl:px-[110px] px-[24px] flex flex-col gap-[40px]">
      {currentTab === "All"
        ? widgetTitles.map((title, index) =>
            pathname === "/people" ? (
              <PeopleWidget key={index} title={title} datas={datas} />
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
                    ? { data: datas.data?.document }
                    : document
                }
                people={
                  pathname === "/company-profile" ? { data: ceoAndCfo } : people
                }
                mineral={
                  pathname === "/company-profile"
                    ? { data: datas?.data?.mineral }
                    : mineral
                }
              />
            )
          )
        : widgetTitles
            .filter((title) => title === currentTab)
            .map((title, index) =>
              pathname === "/people" ? (
                <PeopleWidget key={index} title={title} datas={datas} />
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
                      ? { data: datas?.data?.mineral }
                      : mineral
                  }
                />
              )
            )}
    </div>
  );
};

export default SeachTableFormat;
