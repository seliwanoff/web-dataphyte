import { useLocation } from "react-router-dom";
import SearchWidget from "./SearchWidget";

interface SeachTableFormatProps {
  widgetTitles: string[];
  currentTab: string;
}

const SeachTableFormat: React.FC<SeachTableFormatProps> = ({
  widgetTitles,
  currentTab,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "Default Title";

  return (
    <div className="w-full max-w-[1750px] mx-auto xl:px-[110px] px-[24px]">
      {currentTab === "All"
        ? widgetTitles.map((title, index) => (
            <SearchWidget key={index} title={title} />
          ))
        : widgetTitles
            .filter((title) => title === currentTab)
            .map((title, index) => <SearchWidget key={index} title={title} />)}
    </div>
  );
};

export default SeachTableFormat;
