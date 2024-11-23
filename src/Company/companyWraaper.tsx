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
}
const baseURl = process.env.REACT_APP_URL;

const CompanyProfile: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [sampleData, setSampleData] = useState({});
  const [eachCompanyDetails, setEachCompanyDetails] = useState<any>({});
  const location = useLocation();
  const { id } = location.state;
  const [isLoading, setIsLoading] = useState(false);

  const companies: CompanyData[] = [
    {
      logo: company,
      name: "Parent Company Name",
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
    })) || [];

  useEffect(() => {
    fetchData(`company/getcompany?id=${id}`, setEachCompanyDetails);
  }, [id]);

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

  const Filters = ["All", "Minerals", "People", "Subsidiaries", "Documents"];

  return (
    <ProfileProvider>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <ComapnyNameDescription
            datas={eachCompanyDetails}
            name={eachCompanyDetails && eachCompanyDetails?.data?.name}
            meta={eachCompanyDetails && eachCompanyDetails?.data?.meta}
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
            widgetTitles={Filters}
            currentTab={currentTab}
            datas={eachCompanyDetails}
          />
        </>
      )}
    </ProfileProvider>
  );
};

export default CompanyProfile;
