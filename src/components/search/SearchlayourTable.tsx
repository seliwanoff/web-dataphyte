import { useLocation } from "react-router-dom";
import EachComponent from "./SearchEachComponent";
import SearchWidget from "./SearchWidget";

const SeachTableFormat = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "Default Title";
  return (
    <div className="w-full max-w-[1750px] mx-auto xl:px-[110px] px-[24px]">
      <SearchWidget title="Minerals" />
      <SearchWidget title="Mining Type" />
      <SearchWidget title="Mining Sites" />
      <SearchWidget title="Documents" />
      <SearchWidget title="Companies" />
    </div>
  );
};

export default SeachTableFormat;
