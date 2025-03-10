import RegulationText from "../components/regulationText";
import RegulationForm from "./regualtionForm";

const RegulationWrapper = () => {
  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <RegulationText
          title="Regulations and Policies"
          description="Our platform provides detailed mining data across Africa, offering interactive maps, legal insights, and real-time reports. Explore mining sites and stay informed with up-to-date information for all key stakeholders."
        />{" "}
        <RegulationForm
          buttonLink="/regulation/profile"
          // onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default RegulationWrapper;
