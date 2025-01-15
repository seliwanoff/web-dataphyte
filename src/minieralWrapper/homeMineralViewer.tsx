import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useEffect, useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import sampleDataResponse from "../data/companySampleReponse.json";

import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import SearchBoxFilter from "../Search/serachBoxFilter";
import Pagination from "../components/pagination";
import PageSearch from "../components/PageSearch";
import ReportsSearchBar from "../components/search/ReportSearchBar";
import FilterDropdown from "../components/search/filter/filterDropdown";
const baseURl = process.env.REACT_APP_URL;

const HomeMIneralViewer = () => {
  const [allCompany, setAllCompany] = useState<any>({ data: [] });
  const [allDocument, setAllDocument] = useState<any>({ data: [] });
  const [allNewpeople, setAllPeople] = useState<any>({ data: [] });
  const [allMineral, setAllMineral] = useState<any>({ data: [] });
  const [miningSite, setMiningSite] = useState<any>({ data: [] });
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("query") || "" || "";
  const [isLoading, setIsLoading] = useState(false);

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("");
  const options = ["Nigeria", "Ghana", "Mozambique", "Dr Congo"];

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
      console.log(data);
      setter(data.data);
      setTotalItems(data.data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(
      `mineral/getminerals?page=${currentPage}&count=${rowsPerPage}&country=${selectedFilter}`,
      setAllMineral
    );
  }, [currentPage, rowsPerPage, selectedFilter]);

  useEffect(() => {
    if (searchQuery)
      fetchData(`search/mineral?q=${searchQuery}`, setAllMineral);
  }, [searchQuery]);

  const [currentTab, setCurrentTab] = useState<string>("All");

  const isDataEmpty = allMineral.data.length === 0;

  return (
    <>
      <ProfileProvider>
        <div className="w-full lg:px-[110px] px-[24px] mx-auto mt-12 max-w-[1750px] mb-6">
          <div className="flex justify-between items-center  flex-col lg:flex-row lg:gap-0 gap-8">
            <ReportsSearchBar
              setSearchQuery={setSearchQuery}
              title={"Search mineral"}
            />
            <FilterDropdown
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              options={options}
              title="Filter by country"
              width="lg:w-fit w-full"
            />
          </div>
        </div>
        {isLoading ? (
          <SkeletonLoader />
        ) : isDataEmpty ? (
          <div className="text-center text-gray-500 xl:mt-[50px] mt-[10px] font-Inter ">
            No data found
          </div>
        ) : (
          <>
            {/***
            <SearchFilter
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              filters={Filters}
            />
            */}
            <SearchResult
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
            />
            <SeachTableFormat
              widgetTitles={["Minerals"]}
              datas={sampleDataResponse}
              miningSite={miningSite}
              company={allCompany}
              document={allDocument}
              currentTab={currentTab}
              people={allNewpeople}
              mineral={allMineral}
            />

            {allMineral && allMineral?.data?.length > 0 && (
              <div className="w-full lg:px-[110px] px-[24px] mx-auto mt-12 max-w-[1750px] ">
                <Pagination
                  totalItems={totalItems}
                  rowsPerPageOptions={[10, 20, 50, 100, 200]}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRowsPerPageChange}
                />
              </div>
            )}
          </>
        )}
      </ProfileProvider>
    </>
  );
};

export default HomeMIneralViewer;
