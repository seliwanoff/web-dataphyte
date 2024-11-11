import ButtonEl from "../components/buttonEl";
import InputEl from "../components/InputEl";
import RegulationText from "../components/regulationText";
import Textarea from "../components/Textarea";
import UploadEl from "../components/uploadEl";
import RegulationForm from "../Regulation/regualtionForm";

const ReportFromWrapper = () => {
  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <RegulationText
          title="Submit Investigations and Reports"
          description="Our platform provides detailed mining data across Africa, offering interactive maps, legal insights, and real-time reports. Explore mining sites and stay informed with up-to-date information for all key stakeholders."
        />

        <div className="w-full flex flex-col gap-10 ">
          <div className="flex-wrap flex xl:gap-[40px] gap-5">
            <InputEl label="Full name" placeholder="John Doe" helperText="" />
            <InputEl
              label="Email"
              placeholder="johndow@example.com"
              helperText=""
            />
            <InputEl
              label="Tags"
              placeholder="Gold, Ore etc..."
              helperText="This let us know what you’re writing about"
            />
          </div>
          <div className="w-full   xl:gap-[50px] gap-[24px] flex items-center xl:flex-row flex-col">
            <Textarea
              placeholder="Gold, Ore etc..."
              helperText="A quick snapshot of your article."
              label="Titles"
            />
            <UploadEl
              placeholder="Gold, Ore etc..."
              helperText="A cover image of yourself"
              label="Display Picture (Optional)"
            />
          </div>
          <div className="w-full  xl:gap-[50px] gap-[24px] flex xl:flex-row flex-col items-center">
            <UploadEl
              placeholder="Gold, Ore etc..."
              helperText="Upload your article"
              label="Article"
            />
            <UploadEl
              placeholder="Article Thumbnail"
              helperText="A cover image of your article"
              label="Titles"
            />
          </div>

          <ButtonEl
            link={""}
            selectedCountry={""}
            selectedContinent={""}
            text="Submit Report"
            size={"max-w-[318px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportFromWrapper;
