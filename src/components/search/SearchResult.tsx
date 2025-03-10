import { useLocation } from "react-router-dom";
import SearchType from "./SearchType";
import { useProfileContext } from "../../context/ProfileContext";
import PeopleProfile from "./peopleprofile";

interface SearchResultProps {
  setCurrentTab: (tab: string) => void;
  currentTab: string;
  datas?: any;
}

const SearchResult: React.FC<SearchResultProps> = ({
  setCurrentTab,
  currentTab,
  datas,
}) => {
  const { profiles } = useProfileContext();
  // console.log(datas);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "Default Title";

  const pathname = location.pathname;

  const searchTypes = [
    { type: "Minerals", count: 30 },
    { type: "Mining Type", count: 30 },
    { type: "People", count: 100 },
    { type: "Mining Site", count: 40 },
    { type: "Document", count: 50 },
    { type: "Companies", count: 30 },
  ];

  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="max-w-[1750px] mx-auto overflow-x-auto parent-scroll">
        <div
          className={`w-full xl:flex  ${
            profiles.length > 0 ? "" : `items-center`
          }`}
        >
          {pathname === "/people" ? <PeopleProfile datas={datas} /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
