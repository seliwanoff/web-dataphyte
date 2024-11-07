import React, { useState } from "react";
import company from "../assets/images/company.png";
import SearchFilter from "../components/search/searchfilter";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { filter } from "d3";
import { ProfileProvider } from "../context/ProfileContext";
import Companymapping from "./CompanyMapping";
import ComapnyNameDescription from "../components/company/companyNameDescription";
import CompanyWidgetSub from "../components/company/CompanyWidgetSub";

interface CompanyData {
  logo: string;
  name: string;
}

const CompanyProfile: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");

  const companies: CompanyData[] = [{ logo: company, name: "DATAPHYTE" }];
  const subsidiaries: CompanyData[] = Array(4).fill({
    logo: company,
    name: "GOLOKA",
  });

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
      companies: subsidiaries,
      size: "xl:text-[20px] text-[12.65px]",
    },
  ];
  const Filters = ["All", "Minerals", "People", "Subsidiaries", "Documents"];
  const filteredFilters = Filters.filter((item) => item !== "All");

  return (
    <>
      <ProfileProvider>
        <ComapnyNameDescription />
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
        <SeachTableFormat widgetTitles={Filters} currentTab={currentTab} />
      </ProfileProvider>
    </>
  );
};

export default CompanyProfile;
