import { useLocation } from "react-router-dom";
import SearchWidget from "./SearchWidget";

interface SeachTableFormatProps {
  widgetTitles: string[];
  currentTab: string;
  datas?: any;
}

const SeachTableFormat: React.FC<SeachTableFormatProps> = ({
  widgetTitles,
  currentTab,
  datas,
}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "Default Title";
  // console.log(datas);
  return (
    <div className="w-full max-w-[1750px] mx-auto xl:px-[110px] px-[24px]">
      {currentTab === "All"
        ? widgetTitles.map((title, index) => (
            <SearchWidget key={index} title={title} datas={datas} />
          ))
        : widgetTitles
            .filter((title) => title === currentTab)
            .map((title, index) => (
              <SearchWidget key={index} title={title} datas={datas} />
            ))}
    </div>
  );
};

export default SeachTableFormat;
