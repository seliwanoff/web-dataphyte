//import { table } from "console";

import axios from "axios";
import doc from "../../assets/images/doc.png";
import ActionRow from "./actionRow";
import HeroRow from "./HeroTable";
import TableColumn from "./tableColumn";
import TableRow from "./tableRow";

interface CompanyNameDescriptionProps {
  datas?: any;
}
const PeopleMaintable: React.FC<CompanyNameDescriptionProps> = ({ datas }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get("https://example.com/file.pdf", {
        responseType: "blob", // Ensure response is a Blob
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.download = "myFile.pdf"; // Optional: Specify the downloaded file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the URL object
      window.URL.revokeObjectURL(url);
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
        {datas.data.document &&
          datas?.data?.document?.map((data: any, index: any) => (
            <tr className="" key={index}>
              <HeroRow
                name={data.name}
                width={20}
                image={doc}
                type={data.type}
              />
              <TableRow name={data.location} width={15} />

              <ActionRow
                name="Download file"
                width={15}
                link=""
                handleDownload={handleDownload}
              />
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PeopleMaintable;
