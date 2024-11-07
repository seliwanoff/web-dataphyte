import ButtonEl from "../components/buttonEl";
import SelectEl from "../components/selectEl";

const RegulationForm = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <SelectEl />
      <ButtonEl />
    </div>
  );
};

export default RegulationForm;
