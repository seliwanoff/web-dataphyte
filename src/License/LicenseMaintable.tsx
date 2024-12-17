//import { table } from "console";

import { useEffect, useState } from "react";
import doc from "../assets/images/doc.png";
import ActionRow from "../components/table/actionRow";
import HeroRow from "../components/table/HeroTable";
import LicenseUseRow from "../components/table/LicenseuseRow";
import StatusRow from "../components/table/statusRow";
import TableColumn from "../components/table/tableColumn";
import TableRow from "../components/table/tableRow";
import DocumentViewer from "../components/documentViewers";
const LicenseMainTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainDoc, setMainDoc] = useState<any>([]);
  const baseURl = process.env.REACT_APP_URL;

  const fetchData = async (
    url: string,
    setter: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURl}${url}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //console.log(data);
      setter(data.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`document/getdocuments?category=license`, setMainDoc);
  }, []);

  const handleDownload = async (link: string, fileName: string, id: number) => {
    //console.log(id);

    window.open(
      `https://do.supidoo.com/api/v2/document/download?id=${id}`,
      "_blank"
    );
  };

  const [showDocument, setShowDocumment] = useState(false);
  const [url, setUrl] = useState("");
  return (
    <>
      {showDocument && (
        <DocumentViewer documentUrl={url} onClose={setShowDocumment} />
      )}
      <table className="bg-inherit w-full border-none mt-[20px] ">
        <thead className="thead bg-white overflow-auto flex-nowrap">
          <tr className="w-full overflow-auto flex-nowrap">
            <TableColumn name="Name" width={20} />
            <TableColumn name="Country" width={10} />
            <TableColumn name="Description" width={20} />

            <TableColumn name="Date" width={10} />
            {/***
            <TableColumn name="License use" width={15} />
            <TableColumn name="Status" width={15} />
            */}
            <TableColumn name="" width={20} />
          </tr>
        </thead>

        <tbody className="tbody bg-white overflow-auto flex-nowrap">
          {mainDoc?.map((item: any, index: any) => (
            <tr className="" key={index}>
              <HeroRow
                name={item.name}
                type={item.type}
                width={30}
                image={doc}
              />
              <TableRow name={item.country} width={10} />
              <TableRow name={item.description} width={20} />

              <TableRow
                name={new Date(item.created_at).toLocaleDateString()}
                width={10}
              />
              {/**
              <LicenseUseRow name="Active" width={15} percentage={"50"} />
              <StatusRow name="Active" width={15} />
              <TableRow name="Type of license" width={20} />
              */}
              <ActionRow
                name="Download file"
                width={15}
                link={item.link}
                setShowDocumment={setShowDocumment}
                setUrl={setUrl}
                handleDownload={() =>
                  handleDownload(item.link, item.name, item.id)
                }
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LicenseMainTable;
