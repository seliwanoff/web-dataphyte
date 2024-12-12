import RegulationText from "../components/regulationText";
import RegulationForm from "../Regulation/regualtionForm";

const MainCountryOview = () => {
  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <RegulationText
          title="Country Overview"
          description="Our platform provides detailed mining data across Africa, offering interactive maps, legal insights, and real-time reports. Explore mining sites and stay informed with up-to-date information for all key stakeholders."
        />{" "}
        <RegulationForm
          buttonLink="/country-overview"
          // onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default MainCountryOview;
