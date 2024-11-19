import SearchBar from "../components/search/search";
import filter from "../assets/images/filter-lines.png";
import SearchBoxFilter from "./serachBoxFilter";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import sampleDataResponse from "../data/companySampleReponse.json";
const SearchWrapper = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  const Filters = [
    "All",
    "Minerals",
    "Mining Type",
    "People",
    "Mining Sites",
    "Documents",
    "Companies",
  ];
  return (
    <>
      <ProfileProvider>
        <SearchBoxFilter />
        <SearchFilter
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          filters={Filters}
        />
        <SearchResult setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <SeachTableFormat
          widgetTitles={[
            "Minerals",
            "Mining Type",
            "Mining Sites",
            "Documents",
            "Companies",
            "People",
          ]}
          datas={sampleDataResponse}
          currentTab={currentTab}
        />
      </ProfileProvider>
    </>
  );
};

export default SearchWrapper;
