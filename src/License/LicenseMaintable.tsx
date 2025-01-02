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
import Pagination from "../components/pagination";

interface SearchBarProps {
  searchQuery?: any;
  setInnerMainDoc?: any;
}
const LicenseMainTable: React.FC<SearchBarProps> = ({
  searchQuery,
  setInnerMainDoc,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainDoc, setMainDoc] = useState<any>([]);
  const baseURl = process.env.REACT_APP_URL;

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
  };

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
      setter(data.data.data);
      setInnerMainDoc(data.data.data);
      setTotalItems(data.data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDatas = async (
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
      setter(data.data.data);
      setInnerMainDoc(data.data.data);

      setTotalItems(data.data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(
      `document/getdocuments?category=license&count=${rowsPerPage}&page=${currentPage}`,
      setMainDoc
    );
  }, [rowsPerPage, currentPage]);

  useEffect(() => {
    if (searchQuery) {
      fetchDatas(`search/document?q=${searchQuery}`, setMainDoc);
    } else {
      fetchData(
        `document/getdocuments?category=license&count=${rowsPerPage}&page=${currentPage}`,
        setMainDoc
      );
    }
  }, [searchQuery, rowsPerPage, currentPage]);

  const handleDownload = async (link: string, fileName: string, id: number) => {
    window.open(`${baseURl}document/download?id=${id}`, "_blank");
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
            <TableColumn name="Name" width={25} />
            <TableColumn name="Country" width={10} />
            <TableColumn name="Description" width={25} />

            <TableColumn name="Date" width={10} />
            {/***
            <TableColumn name="License use" width={15} />
            <TableColumn name="Status" width={15} />
            */}
            <TableColumn name="" width={10} />
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
      {mainDoc.length > 0 && (
        <Pagination
          totalItems={totalItems}
          rowsPerPageOptions={[5, 10, 20, 50, 100, 200]}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      )}
    </>
  );
};

export default LicenseMainTable;
