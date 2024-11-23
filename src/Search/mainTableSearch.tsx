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
  const handleDownload = async (links: any, name: any) => {
    try {
      const response = await axiosInstance.get(`${links}`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");
      link.href = url;
      link.download = `${name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

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
        {datas.data &&
          datas?.data?.map((data: any, index: any) => (
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
