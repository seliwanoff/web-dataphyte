import RegulationText from "../components/regulationText";
import RegulationForm from "../Regulation/regualtionForm";

const DataVisualiztionWrapper = () => {
  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <RegulationText
          title="Investigations and Reports"
          description="Our platform provides detailed mining data across Africa, offering interactive maps, legal insights, and real-time reports. Explore mining sites and stay informed with up-to-date information for all key stakeholders."
        />
        <RegulationForm buttonLink="/reports/details" />
      </div>
    </div>
  );
};

export default DataVisualiztionWrapper;
