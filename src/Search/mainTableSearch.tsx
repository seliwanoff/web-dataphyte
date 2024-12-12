//import { table } from "console";

import axios from "axios";
import doc from "../assets/images/doc.png";
import ActionRow from "../components/table/actionRow";
import HeroRow from "../components/table/HeroTable";
import TableColumn from "../components/table/tableColumn";
import TableRow from "../components/table/tableRow";
import axiosInstance from "../utills/axiosInstance";
import { click } from "@testing-library/user-event/dist/click";
import DocumentViewer from "../components/documentViewers";
import { useState } from "react";
import { data } from "../type";

interface CompanyNameDescriptionProps {
  datas?: any;
}
const Maintable: React.FC<CompanyNameDescriptionProps> = ({ datas }) => {
  const handleDownload = async (link: string, fileName: string, id: number) => {
    //console.log(id);

    window.open(
      `https://do.supidoo.com/api/v2/document/download?id=${id}`,
      "_blank"
    );
  };

  const [showDocument, setShowDocumment] = useState(false);
  const [url, setUrl] = useState("");
  console.log(datas);
  return (
    <>
      {showDocument && (
        <DocumentViewer documentUrl={url} onClose={setShowDocumment} />
      )}
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
                  setShowDocumment={setShowDocumment}
                  setUrl={setUrl}
                  handleDownload={() =>
                    handleDownload(data.link, data.name, data.id)
                  }
                />
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Maintable;
