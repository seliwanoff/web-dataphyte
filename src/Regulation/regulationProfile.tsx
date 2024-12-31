import { useEffect, useState } from "react";
import MapComponent from "../components/country/countryMap";
import CountryMap from "../components/country/countryMap";
import CountryStatistics from "../components/country/CountryStatistics";
import CountryTitle from "../components/country/CuntryTitle";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";
import SearchBar from "../components/search/search";
import Maintable from "../Search/mainTableSearch";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import Pagination from "../components/pagination";
import ReportsSearchBar from "../components/search/ReportSearchBar";

const RegulationProfile = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const baseURl = process.env.REACT_APP_URL;
  const [allDoc, setAllDocument] = useState<any>([]);
  const [mainDoc, setMainDoc] = useState<any>([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("c") || "" || "";
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
  };
  // console.log(searchQuery);
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
      setTotalItems(data?.data?.total);

      setter(data);
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
      setTotalItems(data.data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchDatas(`search/document?q=${searchQuery}`, setMainDoc);
    } else {
      fetchData(
        `document/getdocuments?category=regulation&count=${rowsPerPage}&page=${currentPage}`,
        setMainDoc
      );
    }
  }, [searchQuery, rowsPerPage, currentPage]);
  useEffect(() => {
    fetchData(
      `country/getcountryresource?country=${
        queryName === "Dr Congo" ? "Congo" : queryName
      }`,
      setAllDocument
    );
  }, [queryName]);

  useEffect(() => {
    fetchData(
      `document/getdocuments?country=${
        queryName === "Dr Congo" ? "Congo" : queryName
      }&category=regulation&count=${rowsPerPage}&page=${currentPage}`,
      setMainDoc
    );
  }, [queryName, rowsPerPage, currentPage, currentPage]);

  return (
    <div className="w-full px-[24px] xl:px-[100px] py-[32px]">
      <div className="flex xl:flex-row flex-col w-full">
        <CountryTitle
          countryName={queryName}
          regions={`${allDoc.country && allDoc.country.states} state` || "0"}
          description={(allDoc.country && allDoc.country.description) || ""}
          image={(allDoc.country && allDoc.country.image) || ""}
          subdivisions={`${allDoc.country && allDoc.country.lg} LGs` || "0"}
        />

        <ReportsSearchBar
          border="border border-[#CCCCCC]"
          bg="bg-[#f0f0f0]"
          setSearchQuery={setSearchQuery}
        />
      </div>

      <div className="w-full mt-[46px]">
        <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins ">
          Documents
        </span>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="xl:block hidden w-full mt-[32px]">
            <Maintable
              datas={{
                data: mainDoc?.data?.data.length > 0 && mainDoc?.data?.data,
              }}
            />
          </div>
        )}

        <div className="xl:hidden block w-full mt-[32px]">
          {mainDoc?.data?.data.length > 0 &&
            mainDoc?.data?.data?.map((item: any, index: any) => (
              <DocumentSearchMobileWidget
                mineralName={item?.name}
                countries={item.country}
                miningCount={4}
                type={item.type}
                mineral={"Maganese"}
                docCount={5}
                link={item.id}
              />
            ))}
        </div>
        {mainDoc?.data?.data.length > 0 && (
          <Pagination
            totalItems={totalItems}
            rowsPerPageOptions={[5, 10, 20, 50, 100, 200]}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default RegulationProfile;
