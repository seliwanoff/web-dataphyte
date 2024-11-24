import { useState } from "react";
import ButtonEl from "../components/buttonEl";
import InputEl from "../components/InputEl";
import RegulationText from "../components/regulationText";
import Textarea from "../components/Textarea";
import UploadEl from "../components/uploadEl";
import RegulationForm from "../Regulation/regualtionForm";

import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
type FormDataType = {
  name: string;
  email: string;
  meta: string;
  title: string;
  article: any;
  article_picture: any;
  location: string;
  display_picture: any;
};
const ReportFromWrapper = () => {
  const baseURl = process.env.REACT_APP_URL;
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    meta: "",
    title: "",
    article: null,
    article_picture: null,
    location: "No location",
    display_picture: null,
  });
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("meta", formData.meta);
    data.append("title", formData.title);
    data.append("article", formData.article, formData.article.name);
    if (formData.article_picture)
      data.append(
        "article_picture",
        formData.article_picture,
        formData.article_picture.name
      );
    data.append("location", formData.location);
    if (formData.display_picture)
      data.append(
        "display_picture",
        formData.display_picture,
        formData.display_picture.name
      );

    try {
      const response = await fetch(`${baseURl}report/create`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      //console.log("Upload successful:", result);

      Store.addNotification({
        title: "Success!",
        message: "Upload successful",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } catch (error) {
      // console.error("Error uploading form data:", error);

      Store.addNotification({
        title: "Error!",
        message: `Error uploading form data:, ${error}`,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    } finally {
      setFormData({
        name: "",
        email: "",
        meta: "",
        title: "",
        article: null,
        article_picture: null,
        display_picture: null,
        location: "No location",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full xl:px-[110px] py-[32px] px-[24px]">
      <div className="w-full max-w-[1750px] mx-auto ">
        <RegulationText
          title="Submit Investigations and Reports"
          description="Our platform provides detailed mining data across Africa, offering interactive maps, legal insights, and real-time reports. Explore mining sites and stay informed with up-to-date information for all key stakeholders."
        />

        <div className="w-full flex flex-col gap-10 ">
          <div className="flex-wrap flex xl:gap-[40px] gap-5">
            <InputEl
              label="Full name"
              placeholder="John Doe"
              helperText=""
              value={formData.name}
              setForm={setFormData}
              name="name"
            />
            <InputEl
              label="Email"
              placeholder="johndow@example.com"
              helperText=""
              value={formData.email}
              setForm={setFormData}
              name="email"
            />
            <InputEl
              label="Tags"
              placeholder="Gold, Ore etc..."
              helperText="This let us know what you’re writing about"
              value={formData.meta}
              setForm={setFormData}
              name="meta"
            />
          </div>

          <div className="w-full   xl:gap-[50px] gap-[24px] flex items-center xl:flex-row flex-col">
            <Textarea
              placeholder="Gold, Ore etc..."
              helperText="A quick snapshot of your article."
              label="Titles"
              value={formData.title}
              setForm={setFormData}
              name="title"
            />

            <UploadEl
              placeholder="Gold, Ore etc..."
              helperText="A cover image of yourself"
              label="Display Picture (Optional)"
              value={formData.display_picture}
              setForm={setFormData}
              name="display_picture"
              accept="image/*"
            />
          </div>
          <div className="w-full  xl:gap-[50px] gap-[24px] flex xl:flex-row flex-col items-center">
            <UploadEl
              placeholder="Gold, Ore etc..."
              helperText="Upload your article"
              label="Article"
              value={formData.article}
              setForm={setFormData}
              name="article"
              accept=".pdf,.docx.xls,.ppt,pptx,.doc"
            />
            <UploadEl
              placeholder="Article Thumbnail"
              helperText="A cover image of your article"
              label="Article Thumbnail"
              value={formData.article_picture}
              setForm={setFormData}
              name="article_picture"
              accept="image/*"
            />
          </div>

          <button
            disabled={isLoading}
            className={`py-[16px] h-[55px] text-unwrap flex justify-center items-center px-[32px] w-full max-w-[318px]
       rounded-[36px] bg-[#7F55DA] text-[#fff] font-Satoshi text-[16px] font-bold leading-[21.6px] outline-none border-none`}
            onClick={handleSubmit} // Pass the event handler
          >
            {isLoading ? "Submitting" : "Submit Report"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportFromWrapper;
