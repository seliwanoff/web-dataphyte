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
}

const baseURl = process.env.REACT_APP_URL;

const CompanyProfile: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [eachCompanyDetails, setEachCompanyDetails] = useState<any>({});
  const location = useLocation();
  const { id } = location.state;
  const [isLoading, setIsLoading] = useState(false);

  const companies: CompanyData[] = [
    {
      logo: company,
      name: eachCompanyDetails?.data?.parent,
      image: eachCompanyDetails?.data.image,
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
    eachCompanyDetails?.data?.children?.map((child: any) => ({
      logo: company,
      name: child?.name,
      image: child.image,
    })) || [];

  useEffect(() => {
    fetchData(`company/getcompany?id=${id}`, setEachCompanyDetails);
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
      type: "People",
      count: allPeopleCount,
    },
    {
      type: "Subsidiaries",
      count: eachCompanyDetails?.data?.subsidiaries?.length || 0,
    },
    {
      type: "Documents",
      count: eachCompanyDetails?.data?.documents?.length || 0,
    },
  ];

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
      companies: subsidiaries, // Assuming stakeholders are also subsidiaries
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
          />
          <div className="xl:block hidden">
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
          <div className="xl:hidden block">
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
