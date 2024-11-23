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
  const [allCompany, setAllCompany] = useState([]);
  const [allDocument, setAllDocument] = useState([]);
  const [allNewpeople, setAllPeople] = useState([]);
  const [allMineral, setAllMineral] = useState([]);
  const [miningSite, setMiningSite] = useState([]);

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
    "All",
    "Minerals",
    "People",
    "Mining Sites",
    "Documents",
    "Companies",
  ];

  return (
    <>
      <ProfileProvider>
        <SearchBoxFilter setSearchQuery={setSearchQuery} />
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            {}
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
              miningSite={miningSite} // miningSite
              company={allCompany} //Allcompany
              document={allDocument} // alldocuments
              currentTab={currentTab} // do not change
              people={allNewpeople} // allpeople
              mineral={allMineral} // all minerals
            />
          </>
        )}
      </ProfileProvider>
    </>
  );
};

export default SearchWrapper;
