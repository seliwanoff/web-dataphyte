import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";
import Maintable from "../Search/mainTableSearch";
import CompanySearchWidget from "../components/search/CompnySearchWidget";
import EachComponent from "../components/search/SearchEachComponent";
import PeopleSearchWidget from "../components/search/peopleSearch";
import { ProfileProvider } from "../context/ProfileContext";
import CountryStatistics from "../components/country/CountryStatistics";
import CountryTitle from "../components/country/CuntryTitle";
import picture1 from "../assets/images/picture1.png";
import picture2 from "../assets/images/picture2.png";
import picture3 from "../assets/images/picture3.png";
import picture4 from "../assets/images/picture4.png";
import parseCountry from "../components/parseCountry";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import SearchFilter from "../components/search/searchfilter";
import SearchBoxFilter from "../Search/serachBoxFilter";

const baseURl = process.env.REACT_APP_URL;

interface MiningSiteData {
  document?: { name: string; location: string }[];
  people?: Array<{
    name: string;
    location: string;
    country: string;
    role: string;
    id: string;
    image: any;
  }>;
  company?: Array<{ name: string; country: string }>;
  mineral?: Array<{ name: string }>;
}

interface MiningSiteResponse {
  data: MiningSiteData;
}

const MiningSiteWrapper: React.FC = () => {
  const [miningSite, setMiningSite] = useState<MiningSiteResponse | null>(null);
  const location = useLocation();
  const { id } = location.state as { id: string };
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (
    url: string,
    setter: React.Dispatch<React.SetStateAction<MiningSiteResponse | null>>
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

  useEffect(() => {
    fetchData(`mininig_site/getsite?id=${id}`, setMiningSite);
  }, [id]);

  // Dynamically calculate filter counts
  const Filters = [
    {
      type: "All",
      count: [
        ...(miningSite?.data?.document || []),
        ...(miningSite?.data?.people || []),
        ...(miningSite?.data?.company || []),
        ...(miningSite?.data?.mineral || []),
      ].length,
    },
    {
      type: "Minerals",
      count: miningSite?.data?.mineral?.length || 0,
    },
    {
      type: "People",
      count: miningSite?.data?.people?.length || 0,
    },
    {
      type: "Documents",
      count: miningSite?.data?.document?.length || 0,
    },
    {
      type: "Companies",
      count: miningSite?.data?.company?.length || 0,
    },
  ];

  const renderSection = (title: string, children: React.ReactNode) => (
    <div className="w-full mt-[46px] flex flex-col gap-8">
      <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins">
        {title}
      </span>
      {children}
    </div>
  );

  return (
    <>
      <SearchBoxFilter setSearchQuery={setSearchQuery} />

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <SearchFilter
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            filters={Filters}
          />
          <div className="max-w-[1750px] mx-auto w-full">
            {miningSite &&
              Array.isArray(miningSite.data?.document) &&
              miningSite.data.document.length > 0 &&
              renderSection(
                "Documents",
                <>
                  <div className="xl:block hidden w-full mt-[32px]">
                    <Maintable datas={{ data: miningSite.data.document }} />
                  </div>
                  <div className="xl:hidden block w-full mt-[32px]">
                    {miningSite.data.document.map((data, index) => (
                      <DocumentSearchMobileWidget
                        mineralName={data.name}
                        countries={data.location}
                        miningCount={4}
                        mineral={"Maganese"}
                        docCount={5}
                        key={index}
                      />
                    ))}
                  </div>
                </>
              )}

            {miningSite &&
              Array.isArray(miningSite.data?.people) &&
              miningSite.data.people.length > 0 &&
              renderSection(
                "People",
                <div className="flex flex-wrap gap-[24px]">
                  <ProfileProvider>
                    {miningSite.data.people.map((data, index) => (
                      <PeopleSearchWidget
                        mineralName={data.name}
                        countries={`${data.location}, ${parseCountry(data)}`}
                        miningCount={4}
                        mineral={"Dataphyte Limited"}
                        docCount={1500}
                        key={index}
                        role={data.role}
                        id={data.id}
                        image={data.image}
                      />
                    ))}
                  </ProfileProvider>
                </div>
              )}

            {miningSite &&
              Array.isArray(miningSite.data?.company) &&
              miningSite.data.company.length > 0 &&
              renderSection(
                "Company",
                <div className="flex flex-wrap gap-[24px]">
                  {miningSite.data.company.map((data, index) => (
                    <CompanySearchWidget
                      mineralName={data.name}
                      countries={parseCountry(data)}
                      miningCount={4}
                      mineral={"Maganese"}
                      docCount={5}
                      key={index}
                    />
                  ))}
                </div>
              )}

            {miningSite &&
              Array.isArray(miningSite.data?.mineral) &&
              miningSite.data.mineral.length > 0 &&
              renderSection(
                "Mineral",
                <div className="flex flex-wrap gap-[24px]">
                  {miningSite.data.mineral.map((data, index) => (
                    <EachComponent
                      key={index}
                      mineralName={data.name}
                      countries="Nigeria, Ghana"
                      miningCount={4}
                      docCount={1500}
                    />
                  ))}
                </div>
              )}
            {renderSection(
              "Photos and Videos",
              <div className="flex overflow-x-auto gap-[24px] scrollbar-rounded parent-scroll">
                {[
                  picture1,
                  picture2,
                  picture3,
                  picture4,
                  picture2,
                  picture1,
                ].map((picture, index) => (
                  <img
                    src={picture}
                    alt={`Picture ${index + 1}`}
                    className="h-[240px]"
                    key={index}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MiningSiteWrapper;
