import SearchBar from "../components/search/search";
import filter from "../assets/images/filter-lines.png";
import SearchBoxFilter from "./serachBoxFilter";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useState } from "react";

const SearchWrapper = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  return (
    <>
      <SearchBoxFilter />
      <SearchFilter setCurrentTab={setCurrentTab} currentTab={currentTab} />
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
        currentTab={currentTab}
      />
    </>
  );
};

export default SearchWrapper;
