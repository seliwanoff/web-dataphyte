import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DocumentSearchMobileWidget from "../components/search/DocumentMobileSearchWidget";
import Maintable from "../Search/mainTableSearch";
import CompanySearchWidget from "../components/search/CompnySearchWidget";
import EachComponent from "../components/search/SearchEachComponent";
import PeopleSearchWidget from "../components/search/peopleSearch";
import { ProfileProvider } from "../context/ProfileContext";

import parseCountry from "../components/parseCountry";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import SearchFilter from "../components/search/searchfilter";
import SearchBoxFilter from "../Search/serachBoxFilter";
import MiningMapSite from "../components/search/MiningMap";
import PlaceIframe from "../components/placeID";
import RealText from "../components/RealText";

const baseURl = process.env.REACT_APP_URL;

interface MiningSiteData {
  rich_text: string;
  document?: { name: string; location: string; type: string }[];
  people?: Array<{
    name: string;
    location: string;
    country: string;
    role: string;
    id: any;
    image: any;
    last_name: string;
    first_name: string;
    title: string;
    mineral: any;
  }>;
  company?: Array<{ name: string; country: string }>;
  picture?: Array<{ name: string; country: string; link: string }>;
  mineral?: Array<{ name: any; id: any; image: any }>;
  name: string;
  real_text: any;

  location?: Array<{
    name: string;
    location: string;
    country: string;
    role: string;
    id: string;
    image: any;
    place_id: any;
  }>;
}

interface MiningSiteResponse {
  data: MiningSiteData;
}

const MiningSiteWrapper: React.FC = () => {
  const [miningSite, setMiningSite] = useState<MiningSiteResponse | null>(null);
  const location = useLocation();
  const { id } = location?.state as { id: string };
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showIframe, setShowIframe] = useState(false);
  const [placeId, setPlaceId] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("id");
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
    fetchData(
      `mininig_site/getsite?id=${id !== null ? id : query}`,
      setMiningSite
    );
  }, [id]);
  const Filters = [
    {
      type: "All",
      count: 20,
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
    <div className="w-full mt-[46px] flex flex-col gap-8 relative">
      <span className="text-[#373737] font-semibold text-[18px] leading-6 font-Poppins">
        {title}
      </span>
      {children}
    </div>
  );

  return (
    <div className="relative">
      {showIframe && (
        <PlaceIframe placeId={placeId} setShowIframe={setShowIframe} />
      )}

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

          <div className="w-full mx-auto xl:px-[110px] py-[32px] px-[24px] relative">
            <div className="text-[32px] font-Poppins font-semibold text-[#202020] leading-6] mb-4">
              {miningSite && miningSite?.data?.name}
            </div>
            {miningSite &&
              Array.isArray(miningSite.data?.location) &&
              miningSite.data.location.length > 0 &&
              renderSection(
                "Locations",
                <div className="flex flex-wrap gap-[24px]">
                  {miningSite.data.location.map((data, index) => (
                    <MiningMapSite
                      data={data}
                      mineralName={
                        miningSite.data.mineral &&
                        miningSite?.data?.mineral[0]?.name
                      }
                      countries={data.name}
                      setPlaceId={setPlaceId}
                      miningCount={
                        (miningSite.data.mineral &&
                          miningSite?.data?.mineral.length) ||
                        0
                      }
                      mineral={
                        miningSite.data.mineral &&
                        miningSite?.data?.mineral[0]?.name
                      }
                      docCount={5}
                      showIframe={showIframe}
                      key={index}
                      setShowIframe={setShowIframe}
                    />
                  ))}
                </div>
              )}
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
                        type={data.type}
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
                        mineralName={`${data.title} ${data.first_name} ${data.last_name}`}
                        countries={`${data.location}, ${parseCountry(data)}`}
                        miningCount={4}
                        mineral={
                          miningSite?.data?.mineral &&
                          miningSite?.data?.mineral[0]?.name
                        }
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
                      image={data.image}
                      id={data.id}
                    />
                  ))}
                </div>
              )}
            {miningSite &&
              Array.isArray(miningSite.data?.picture) &&
              miningSite.data.picture.length > 0 &&
              renderSection(
                "Pictures",
                <div className="flex overflow-x-auto gap-[24px] scrollbar-rounded parent-scroll">
                  {miningSite.data.picture.map((picture, index) => (
                    <img
                      src={`https://cardri.s3.eu-west-1.amazonaws.com/${picture?.link}`}
                      alt={`Picture ${index + 1}`}
                      className="h-[240px] w-[229px] rounded-md flex-shrink-0"
                      key={index}
                    />
                  ))}
                </div>
              )}

            {miningSite &&
              miningSite?.data?.rich_text !== "" &&
              miningSite?.data?.rich_text !== null &&
              renderSection(
                "Detail Description",
                <RealText richText={miningSite?.data?.rich_text} />
              )}
          </div>
        </>
      )}
    </div>
  );
};

export default MiningSiteWrapper;
