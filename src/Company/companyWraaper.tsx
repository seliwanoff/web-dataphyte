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
  ];

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

  const subsidiaries: CompanyData[] =
    eachCompanyDetails?.data?.children?.slice(0, 3)?.map((child: any) => ({
      logo: company,
      name: child?.name,
      image: child.image,
      id: child.id,
    })) || [];

  const stakeholders: CompanyData[] =
    eachCompanyDetails?.data?.stakeholder?.slice(1, 3)?.map((child: any) => ({
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
    [eachCompanyDetails?.data?.ceo]?.length +
    [eachCompanyDetails?.data?.cto]?.length +
    [eachCompanyDetails?.data?.cfo]?.length;
  const Filters = [
    {
      type: "All",
      count:
        (eachCompanyDetails?.data?.mineral?.length || 0) +
        (eachCompanyDetails?.data?.people?.length || 0) +
        (eachCompanyDetails?.data?.subsidiaries?.length || 0) +
        (eachCompanyDetails?.data?.documents?.length || 0),
    },
    { type: "Minerals", count: eachCompanyDetails?.data?.mineral?.length || 0 },
    {
      type: "Detail Description",
      count: eachCompanyDetails?.data?.rich_text !== "" ? 1 : 0,
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
  // console.log(eachCompanyDetails);

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
