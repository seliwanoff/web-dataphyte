import RegulationText from "../components/regulationText";
import RegulationForm from "./regualtionForm";

const RegulationWrapper = () => {
  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <RegulationText />
        <RegulationForm />
      </div>
    </div>
  );
};

export default RegulationWrapper;
