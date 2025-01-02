import { useEffect, useState } from "react";
import MapComponent from "../components/country/countryMap";
import CountryStatistics from "../components/country/CountryStatistics";
import CountryTitle from "../components/country/CuntryTitle";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";
import Maintable from "../Search/mainTableSearch";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import Pagination from "../components/pagination";
import ReportsSearchBar from "../components/search/ReportSearchBar";

const CountryOveViewWrapper = () => {
  const baseURl = process.env.REACT_APP_URL;
  const [allDoc, setAllDocument] = useState<any>([]);
  const [searchDoc, setSearchDoc] = useState<any>([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("c") || "" || "";
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

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
      const response = await fetch(
        `${baseURl}${url}&count=${rowsPerPage}&page=${currentPage}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //console.log(data);

      setTotalItems(data.documents.total);
      setter(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataDocumentSearch = async (
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
      //  console.log(data.data.data);

      // setTotalItems(data.documents.total);
      setter(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(
      `country/getcountryresource?country=${
        queryName === "Dr Congo" ? "Congo" : queryName
      }`,
      setAllDocument
    );
  }, [queryName, rowsPerPage, currentPage, currentPage]);

  useEffect(() => {
    if (searchQuery)
      fetchDataDocumentSearch(`search/document?q=${searchQuery}`, setSearchDoc);
  }, [searchQuery]);

  return (
    <div className="w-full px-[24px] xl:px-[100px] py-[32px]">
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <CountryTitle
          countryName={queryName}
          regions={`${allDoc.country && allDoc.country.states} state` || ""}
          description={(allDoc.country && allDoc.country.description) || ""}
          image={(allDoc.country && allDoc.country.image) || ""}
          subdivisions={`${allDoc.country && allDoc.country.lg}LGs` || ""}
        />
      )}
      <CountryStatistics />

      <MapComponent country={queryName} />

      <div className="w-full mt-[46px]">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins ">
          Documents
        </span>
        <div className="flex items-end mt-6 w-full  justify-end">
          <ReportsSearchBar
            style=""
            bg="bg-[#f0f0f0]"
            border="border border-[#ccc]"
            setSearchQuery={setSearchQuery}
            title={"Search Documents"}
          />
        </div>

        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="xl:block hidden w-full mt-[32px]">
            <Maintable
              datas={{
                data: searchQuery
                  ? searchDoc.data.data
                  : allDoc?.documents?.data?.length > 0 &&
                    allDoc?.documents?.data,
              }}
            />
          </div>
        )}
        <div className="xl:hidden block w-full mt-[32px]">
          {searchQuery
            ? searchDoc.data.data?.map((item: any, index: any) => (
                <DocumentSearchMobileWidget
                  mineralName={item?.name}
                  countries={item.country}
                  miningCount={4}
                  type={item.type}
                  mineral={"Maganese"}
                  docCount={5}
                  link={item.id}
                  key={index}
                />
              ))
            : allDoc?.documents?.data.length > 0 &&
              allDoc?.documents?.data?.map((item: any, index: any) => (
                <DocumentSearchMobileWidget
                  mineralName={item?.name}
                  countries={item.country}
                  miningCount={4}
                  type={item.type}
                  mineral={"Maganese"}
                  docCount={5}
                  link={item.id}
                  key={index}
                />
              ))}
        </div>
        {allDoc?.documents?.data?.length > 0 && (
          <Pagination
            totalItems={totalItems}
            rowsPerPageOptions={[10, 20, 50, 100, 200]}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default CountryOveViewWrapper;
