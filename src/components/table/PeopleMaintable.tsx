//import { table } from "console";

import axios from "axios";
import doc from "../../assets/images/doc.png";
import ActionRow from "./actionRow";
import HeroRow from "./HeroTable";
import TableColumn from "./tableColumn";
import TableRow from "./tableRow";
import { useState } from "react";
import DocumentViewer from "../documentViewers";

interface CompanyNameDescriptionProps {
  datas?: any;
}
const PeopleMaintable: React.FC<CompanyNameDescriptionProps> = ({ datas }) => {
  const baseURL = process.env.REACT_APP_URL;

  const handleDownload = async (link: string, fileName: string, id: number) => {
    //console.log(id);

    window.open(`${baseURL}document/download?id=${id}`, "_blank");
  };

  const [showDocument, setShowDocumment] = useState(false);
  const [url, setUrl] = useState("");
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

        <tbody className="tbody bg-white w-full">
          {datas.data.document &&
            datas?.data?.document?.map((data: any, index: any) => (
              <tr className="" key={index}>
                <HeroRow
                  name={data.name}
                  width={30}
                  image={doc}
                  type={data.type}
                />
                <TableRow name={data.location} width={15} />

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

export default PeopleMaintable;
