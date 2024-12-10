import SearchBoxFilter from "./serachBoxFilter";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useEffect, useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import sampleDataResponse from "../data/companySampleReponse.json";

import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
const baseURl = process.env.REACT_APP_URL;

const SearchWrapper = () => {
  const [allCompany, setAllCompany] = useState<any>({ data: [] });
  const [allDocument, setAllDocument] = useState<any>({ data: [] });
  const [allNewpeople, setAllPeople] = useState<any>({ data: [] });
  const [allMineral, setAllMineral] = useState<any>({ data: [] });
  const [miningSite, setMiningSite] = useState<any>({ data: [] });
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "" || "";
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async (
    url: string,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURl}${url}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`search/people?q=${queryName}`, setAllPeople);
  }, [queryName]);

  useEffect(() => {
    fetchData(`search/company?q=${queryName}`, setAllCompany);
  }, [queryName]);

  useEffect(() => {
    fetchData(`search/document?q=${queryName}`, setAllDocument);
  }, [queryName]);

  useEffect(() => {
    fetchData(`search/site?q=${queryName}`, setMiningSite);
  }, [queryName]);
  useEffect(() => {
    fetchData(`search/mineral?q=${queryName}`, setAllMineral);
  }, [queryName]);

  const [currentTab, setCurrentTab] = useState<string>("All");
  const Filters = [
    {
      type: "All",
      count:
        allCompany.data.length +
        allDocument.data.length +
        allNewpeople.data.length +
        allMineral.data.length +
        miningSite.data.length,
    },
    { type: "Minerals", count: allMineral.data.length },
    { type: "People", count: allNewpeople.data.length },
    { type: "Mining Sites", count: miningSite.data.length },
    { type: "Documents", count: allDocument.data.length },
    { type: "Companies", count: allCompany.data.length },
    { type: "Rich Text", count: 0 },
  ];

  const isDataEmpty =
    allCompany.data.length === 0 &&
    allDocument.data.length === 0 &&
    allNewpeople.data.length === 0 &&
    allMineral.data.length === 0 &&
    miningSite.data.length === 0;

  return (
    <>
      <ProfileProvider>
        <SearchBoxFilter setSearchQuery={setSearchQuery} />
        {isLoading ? (
          <SkeletonLoader />
        ) : isDataEmpty ? (
          <div className="text-center text-gray-500 xl:mt-[50px] mt-[10px] font-Inter">
            No data found
          </div>
        ) : (
          <>
            <SearchFilter
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              filters={Filters}
            />
            <SearchResult
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
            />
            <SeachTableFormat
              widgetTitles={[
                "Minerals",

                "Mining Sites",
                "Documents",
                "Companies",
                "People",
              ]}
              datas={sampleDataResponse}
              miningSite={miningSite}
              company={allCompany}
              document={allDocument}
              currentTab={currentTab}
              people={allNewpeople}
              mineral={allMineral}
            />
          </>
        )}
      </ProfileProvider>
    </>
  );
};

export default SearchWrapper;
