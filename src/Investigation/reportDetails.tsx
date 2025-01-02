import { useEffect, useState } from "react";
import ButtonEl from "../components/buttonEl";
import CountryTitle from "../components/country/CuntryTitle";
import EachNewsCard from "../components/eachNewCards";
import SearchBar from "../components/search/search";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import Pagination from "../components/pagination";
import ReportsSearchBar from "../components/search/ReportSearchBar";
const baseURl = process.env.REACT_APP_URL;

const ReportDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("c") || "" || "";
  const [query, setQuery] = useState(queryName);
  const [isLoading, setIsLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [allDoc, setAllDocument] = useState<any>([]);

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

      // console.log(data);
      setTotalItems(data.data.total);

      setter(data.data.data);
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
      setter(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDatasearch = async (
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
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(
      `report/get?location=${queryName}&count=${rowsPerPage}&page=${currentPage}`,
      setReports
    );
  }, [queryName, rowsPerPage, currentPage]);

  useEffect(() => {
    fetchDatas(
      `country/getcountryresource?country=${
        queryName === "Dr Congo" ? "Congo" : queryName
      }`,
      setAllDocument
    );
  }, [queryName]);
  useEffect(() => {
    if (searchQuery) {
      fetchDatasearch(
        `search/report?q=${searchQuery}&location=${queryName}&count=${rowsPerPage}`,
        setReports
      );
    } else {
      fetchData(`report/get?location=${queryName}`, setReports);
    }
  }, [searchQuery]);

  return (
    <div className="w-full px-[24px] xl:px-[100px] py-[32px]">
      <div className="flex w-full xl:flex-row flex-col justify-end xl:justify-end xl:items-start items-end gap-8 mb-5 xl:mb-0 ">
        <CountryTitle
          countryName={queryName}
          regions={`${allDoc.country && allDoc.country.states} state`}
          description={(allDoc.country && allDoc.country.description) || ""}
          image={(allDoc.country && allDoc.country.image) || ""}
          subdivisions={(allDoc.country && allDoc.country.lg) || ""}
        />

        <ButtonEl
          link={"/reports/form"}
          selectedCountry={queryName}
          selectedContinent={""}
          text="Submit Report"
        />
      </div>
      <div className="border-t-2 border-[#cecece] w-full mt-2"></div>

      <div className="flex flex-col gap-[40px]">
        <div className="flex items-center xl:flex-row flex-col gap-6 justify-between mt-3">
          <h3 className="text-[#161616] text-[32px] font-semibold leading-[44.29px] text-left font-polySans">
            Investigations and Reports
          </h3>
          <ReportsSearchBar
            style=""
            bg="bg-[#f0f0f0]"
            border="border border-[#ccc]"
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className=" flex  items-center w-full gap-6   flex-wrap  relative ">
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <>
              {reports.length > 0 ? (
                <>
                  {reports.length > 0 &&
                    reports?.map((report, index) => (
                      <EachNewsCard key={index} data={report} />
                    ))}
                </>
              ) : (
                <div className="text-center text-gray-500 xl:mt-[50px] mt-[10px] font-Inter w-full">
                  No report found
                </div>
              )}
            </>
          )}
        </div>
        {reports.length > 0 && (
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

export default ReportDetails;
