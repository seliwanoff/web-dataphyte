import SearchBar from "../components/search/search";
import filter from "../assets/images/filter-lines.png";
//import SearchBoxFilter from "./serachBoxFilter";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useEffect, useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import sampleDataResponse from "../data/companySampleReponse.json";
import peopleSampleDataResponse from "../data/peopleSampleResponse.json";
import SearchBoxFilter from "../Search/serachBoxFilter";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
const baseURl = process.env.REACT_APP_URL;

const PeopleWrapper = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [people, setPeople] = useState([]);
  const Filters = ["All", "Minerals", "Mining Sites", "Documents", "Companies"];
  const location = useLocation();
  const { id } = location.state;
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
    fetchData(`people/getpeople?id=${id}`, setPeople);
  }, [id]);

  return (
    <>
      <ProfileProvider>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <SearchBoxFilter setSearchQuery={setSearchQuery} />
            <SearchFilter
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              filters={Filters}
            />
            <SearchResult
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              datas={people}
            />
            <SeachTableFormat
              widgetTitles={[
                "Minerals",
                "Mining Sites",
                "Documents",
                "Companies",
              ]}
              datas={people}
              currentTab={currentTab}
            />
          </>
        )}
      </ProfileProvider>
    </>
  );
};

export default PeopleWrapper;
