import SearchBar from "../components/search/search";
import filter from "../assets/images/filter-lines.png";
import SearchBoxFilter from "./serachBoxFilter";
import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";

const SearchWrapper = () => {
  return (
    <>
      <SearchBoxFilter />
      <SearchFilter />
      <SearchResult />
      <SeachTableFormat />
    </>
  );
};

export default SearchWrapper;
