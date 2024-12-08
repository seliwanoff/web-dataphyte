import SearchBar from "../components/search/search";
import filter from "../assets/images/filter-lines.png";
//import SearchBoxFilter from "./serachBoxFilter";
import picture1 from "../assets/images/picture1.png";
import picture2 from "../assets/images/picture2.png";
import picture3 from "../assets/images/picture3.png";
import picture4 from "../assets/images/picture4.png";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useEffect, useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import SearchBoxFilter from "../Search/serachBoxFilter";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
const baseURl = process.env.REACT_APP_URL;

const PeopleWrapper = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [people, setPeople] = useState<any>(null); // Updated to allow access to nested properties
  const location = useLocation();
  const { id } = location?.state || null;
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("id");
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
    fetchData(`people/getpeople?id=${id !== null ? id : query}`, setPeople);
  }, [id]);

  const Filters = [
    {
      type: "All",
      count:
        people?.data?.mineral?.length +
        people?.data?.site?.length +
        people?.data?.document?.length +
        people?.data?.ceo?.length +
        people?.data.cfo.length +
        people?.data?.cto.length,
    },
    { type: "Minerals", count: people?.data?.mineral?.length || 0 },
    { type: "Mining Sites", count: people?.data?.site?.length || 0 },
    { type: "Documents", count: people?.data?.document?.length || 0 },
    {
      type: "Companies",
      count:
        people?.data?.ceo?.length +
        people?.data?.cfo.length +
        people?.data?.cto.length,
    },
  ];

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
              filters={Filters} // Updated to pass an array of objects with `type` and `count`
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
                "Picture",
                "Detail Description",
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
