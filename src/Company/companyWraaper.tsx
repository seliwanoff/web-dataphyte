import React, { useEffect, useState } from "react";
import company from "../assets/images/company.png";
import SearchFilter from "../components/search/searchfilter";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { ProfileProvider } from "../context/ProfileContext";
import Companymapping from "./CompanyMapping";
import ComapnyNameDescription from "../components/company/companyNameDescription";
import CompanyWidgetSub from "../components/company/CompanyWidgetSub";
import { useLocation } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";

interface CompanyData {
  logo: string;
  name: string;
  image: any;
  id: any;
}

const baseURl = process.env.REACT_APP_URL;

const CompanyProfile: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [eachCompanyDetails, setEachCompanyDetails] = useState<any>({});
  const location = useLocation();
  const { id } = location?.state || {};
  const [isLoading, setIsLoading] = useState(false);

  const companies: CompanyData[] = [
    {
      logo: company,
      name: eachCompanyDetails?.data?.parent,
      image: eachCompanyDetails?.data?.image,
      id: eachCompanyDetails?.data?.id,
    },
  ].filter((company) => company.name);

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
      setter(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const ceoAndCfo = [
    eachCompanyDetails?.data?.ceo,
    eachCompanyDetails?.data?.cfo,
    eachCompanyDetails?.data?.cto,
  ]
    .filter((person) => person) // Filter out undefined or null values
    .map((person, index) => ({
      id: person?.id,
      name: `${person?.title || ""} ${person?.first_name || ""} ${
        person?.last_name || ""
      }`.trim(),
      image: person?.image,
      location: person?.location,
      country: person?.country,
      role: index === 0 ? "CEO" : index === 1 ? "CFO" : "CTO", // Assign roles dynamically
    }));

  // console.log(ceoAndCfo);
  const subsidiaries: CompanyData[] =
    eachCompanyDetails?.data?.children?.slice(0, 3)?.map((child: any) => ({
      logo: company,
      name: child?.name,
      image: child.image,
      id: child.id,
    })) || [];

  const stakeholders: CompanyData[] =
    ceoAndCfo?.slice(0, 3)?.map((child: any) => ({
      logo: company,
      name: child?.name,
      image: child.image,
      id: child.id,
    })) || [];
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("id");
  useEffect(() => {
    fetchData(`company/getcompany?id=${id || query}`, setEachCompanyDetails);
  }, [id]);

  const allPeopleCount =
    (eachCompanyDetails?.data?.ceo ? eachCompanyDetails.data.ceo.length : 0) +
    (eachCompanyDetails?.data?.cto ? eachCompanyDetails.data.cto.length : 0) +
    (eachCompanyDetails?.data?.cfo ? eachCompanyDetails.data.cfo.length : 0);

  const Filters = [
    {
      type: "All",
      count: 4,
    },
    { type: "Minerals", count: eachCompanyDetails?.data?.mineral?.length || 0 },
    {
      type: "Detail Description",
      count: eachCompanyDetails?.data?.rich_text !== null ? 1 : 0,
    },
    {
      type: "People",
      count: allPeopleCount,
    },
    {
      type: "Subsidiaries",
      count: eachCompanyDetails?.data?.children?.length || 0,
    },
    {
      type: "Documents",
      count: eachCompanyDetails?.data?.document?.length || 0,
    },
    {
      type: "Pictures",
      count: eachCompanyDetails?.data?.picture?.length || 0,
    },
  ];
  // console.log(allPeopleCount);
  const sections = [
    {
      title: "Parent Company",
      companies: companies,
      size: "xl:text-[24px] text-[20px]",
    },
    {
      title: "SUBSIDIARIES",
      companies: subsidiaries,
      size: "xl:text-[20px] text-[12.65px]",
    },

    {
      title: "Stakeholders",
      companies: stakeholders, // Assuming stakeholders are also subsidiaries
      size: "xl:text-[20px] text-[12.65px]",
    },
  ];

  return (
    <ProfileProvider>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <ComapnyNameDescription
            datas={eachCompanyDetails}
            name={eachCompanyDetails?.data?.name}
            meta={eachCompanyDetails?.data?.meta}
            id={eachCompanyDetails?.data?.id}
          />
          <div className=" hidden">
            <Companymapping />
          </div>
          {sections.map((section, index) => (
            <CompanyWidgetSub
              key={index}
              companies={section.companies}
              title={section.title}
              size={section.size}
            />
          ))}
          <div className="hidden">
            <Companymapping />
          </div>
          <SearchFilter
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
            filters={Filters}
          />
          <SeachTableFormat
            widgetTitles={Filters.map((filter) => filter.type)}
            currentTab={currentTab}
            datas={eachCompanyDetails}
          />
        </>
      )}
    </ProfileProvider>
  );
};

export default CompanyProfile;
