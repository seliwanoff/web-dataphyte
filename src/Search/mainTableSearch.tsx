//import { table } from "console";

import axios from "axios";
import doc from "../assets/images/doc.png";
import ActionRow from "../components/table/actionRow";
import HeroRow from "../components/table/HeroTable";
import TableColumn from "../components/table/tableColumn";
import TableRow from "../components/table/tableRow";
import axiosInstance from "../utills/axiosInstance";
import { click } from "@testing-library/user-event/dist/click";

interface CompanyNameDescriptionProps {
  datas?: any;
}
const Maintable: React.FC<CompanyNameDescriptionProps> = ({ datas }) => {
  const handleDownload = async (link: string, fileName: string) => {
    try {
      // Fetch the file as a blob
      const response = await axiosInstance.get(link, {
        responseType: "blob", // This ensures the response is treated as binary data
      });

      // Create a Blob URL from the file data
      const url = window.URL.createObjectURL(response.data);

      // Create an anchor element dynamically
      const anchor = document.createElement("a");
      anchor.href = url;

      // Use the provided fileName or fallback to a default name
      anchor.download = fileName || "downloaded_file";

      // Append anchor to the DOM, trigger the click event, then remove it
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      // Revoke the Blob URL to free up memory
      window.URL.revokeObjectURL(url);

      console.log(`File "${fileName}" downloaded successfully!`);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <table className="bg-inherit w-full border-none">
      <thead className="thead bg-white">
        <tr className="w-full ">
          <TableColumn name="Document name" width={20} />
          <TableColumn name="Description" width={20} />

          <TableColumn name="" width={15} />
        </tr>
      </thead>

      <tbody className="tbody bg-white">
        {datas.data &&
          datas?.data?.map((data: any, index: any) => (
            <tr className="" key={index}>
              <HeroRow
                name={data.name}
                width={20}
                image={doc}
                type={data.type}
              />
              <TableRow name={JSON.parse(data.meta)} width={15} />

              <ActionRow
                name="Download file"
                width={15}
                link={data.link}
                handleDownload={() => handleDownload(data.link, data.name)}
              />
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Maintable;
