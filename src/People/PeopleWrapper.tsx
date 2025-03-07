import SearchFilter from "../components/search/searchfilter";
import SearchResult from "../components/search/SearchResult";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { useEffect, useState } from "react";
import { ProfileProvider } from "../context/ProfileContext";
import SearchBoxFilter from "../Search/serachBoxFilter";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import ComapnyNameDescription from "../components/company/companyNameDescription";
import Companymapping from "../Company/CompanyMapping";
import { Link } from "react-router-dom";
import BODSGraph from "../components/bod4";

const baseURl = process.env.REACT_APP_URL;

interface Descendant {
  id: number;
  name: string;
  country: string;
  rc_number: string;
  address: string;
  image: string;
  created_at: string;
  updated_at: string;
  children?: Descendant[];
  ceo_id?: any;
  cto_id?: any;
  cfo_id?: any;
  people_ids?: any;
  parent_id?: any;
  meta?: any;
  other_data?: any;
  rich_text?: any;
}

interface CompanyData extends Descendant {
  descendants: Descendant[];
}

const PeopleWrapper = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [people, setPeople] = useState<any>(null); // Updated to allow access to nested properties
  const location = useLocation();
  const [datax, setDatax] = useState<any>([]);
  const { id } = location?.state || {};
  const [isLoadingBod, setIsLoadingBod] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("id");
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
      setter(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(`people/getpeople?id=${id || query}`, setPeople);
  }, [id]);

  useEffect(() => {
    setIsLoadingBod(true);
    fetch(`${baseURl}people/get-people-mappin?id=${query}`)
      .then((response) => response.json())
      .then((data: CompanyData[]) => {
        //@ts-ignore
        console.log(data);
        setDatax(data);
        setIsLoadingBod(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const Filters = [
    {
      type: "All",
      count:
        people?.data?.mineral?.length +
        people?.data?.site?.length +
        people?.data?.document?.length +
        people?.data?.ceo?.length +
        people?.data?.cfo?.length +
        people?.data?.cto?.length,
    },
    { type: "Minerals", count: people?.data?.mineral?.length || 0 },
    { type: "Mining Sites", count: people?.data?.site?.length || 0 },
    { type: "Documents", count: people?.data?.document?.length || 0 },
    {
      type: "Companies",
      count: people?.data?.company?.length,
    },
  ];

  return (
    <>
      <ProfileProvider>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <SearchBoxFilter setSearchQuery={setSearchQuery} />

            <SearchFilter
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              filters={Filters} // Updated to pass an array of objects with `type` and `count`
            />
            <div className="font-Poppins text-[18px] font-semibold leading-5  text-center xl:text-right text-[#7F55DA] w-full xl:px-[110px] px-[24px] lg:block hidden">
              <div className="w-full max-w-[1750px] mt-4">
                <Link
                  to={`/people/chart?id=${id}&name=${
                    people?.data?.first_name
                  }${" "}${people?.data?.last_name}`}
                >
                  View people mapping{" "}
                </Link>
              </div>
            </div>
            <SearchResult
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
              datas={people}
            />
            {!isLoadingBod && datax?.length > 1 ? (
              <div className="h-[300px] max-w-[1750px] mx-auto overflow-auto lg:block hidden w-full">
                <BODSGraph data={datax} isType="people" />
              </div>
            ) : (
              ""
            )}

            <SeachTableFormat
              widgetTitles={[
                "Minerals",
                "Detail Description",
                "Mining Sites",
                "Documents",
                "Companies",
                "Picture",
              ]}
              datas={people}
              currentTab={currentTab}
            />
          </>
        )}
      </ProfileProvider>
    </>
  );
};

export default PeopleWrapper;
