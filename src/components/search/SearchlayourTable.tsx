import { useLocation } from "react-router-dom";
import EachComponent from "./SearchEachComponent";
import SearchWidget from "./SearchWidget";

const SeachTableFormat = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "Default Title";
  return (
    <div className="w-full xl:px-[110px] px-[24px]">
      <SearchWidget title="Minerals" />
      <SearchWidget title="Mining Type" />
    </div>
  );
};

export default SeachTableFormat;
