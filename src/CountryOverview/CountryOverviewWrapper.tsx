import { useEffect, useState } from "react";
import MapComponent from "../components/country/countryMap";
import CountryStatistics from "../components/country/CountryStatistics";
import CountryTitle from "../components/country/CuntryTitle";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";
import Maintable from "../Search/mainTableSearch";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import Pagination from "../components/pagination";

const CountryOveViewWrapper = () => {
  const baseURl = process.env.REACT_APP_URL;
  const [allDoc, setAllDocument] = useState<any>([]);

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

  useEffect(() => {
    fetchData(
      `country/getcountryresource?country=${
        queryName === "Dr Congo" ? "Congo" : queryName
      }`,
      setAllDocument
    );
  }, [queryName, rowsPerPage, currentPage, currentPage]);
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
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="xl:block hidden w-full mt-[32px]">
            <Maintable
              datas={{
                data:
                  allDoc?.documents?.data?.length > 0 &&
                  allDoc?.documents?.data,
              }}
            />
          </div>
        )}
        <div className="xl:hidden block w-full mt-[32px]">
          {allDoc?.documents?.data.length > 0 &&
            allDoc?.documents?.data?.map((item: any, index: any) => (
              <DocumentSearchMobileWidget
                mineralName={item?.name}
                countries={item.country}
                miningCount={4}
                type={item.type}
                mineral={"Maganese"}
                docCount={5}
              />
            ))}
        </div>

        <Pagination
          totalItems={totalItems}
          rowsPerPageOptions={[5, 10, 20, 50, 100, 200]}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </div>
  );
};

export default CountryOveViewWrapper;
