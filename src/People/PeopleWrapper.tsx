import SearchBar from "../components/search/search";
import filter from "../assets/images/filter-lines.png";
//import SearchBoxFilter from "./serachBoxFilter";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import sampleDataResponse from "../data/companySampleReponse.json";
import peopleSampleDataResponse from "../data/peopleSampleResponse.json";
import SearchBoxFilter from "../Search/serachBoxFilter";
const PeopleWrapper = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  //console.log(sampleDataResponse);
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
        <SearchResult
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          datas={peopleSampleDataResponse}
        />
        <SeachTableFormat
          widgetTitles={[
            "Minerals",
            "Mining Type",
            "Mining Sites",
            "Documents",
            "Companies",
            "People",
          ]}
          datas={peopleSampleDataResponse}
          currentTab={currentTab}
        />
      </ProfileProvider>
    </>
  );
};

export default PeopleWrapper;
