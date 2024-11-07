import IneractiveMap from "../components/Interactive/map";
import InteractiveText from "./interactiveText";

const InteractiveMapWrapper = () => {
  return (
    <div className="w-full xl:px-[110px] px-[24px] py-[32px]">
      <div className="max-w-[1750px] mx-auto ">
        <InteractiveText />
        <IneractiveMap />
      </div>
    </div>
  );
};

export default InteractiveMapWrapper;
