import React, { useState } from "react";
import company from "../assets/images/company.png";
import SearchFilter from "../components/search/searchfilter";
import SeachTableFormat from "../components/search/SearchlayourTable";
import { ProfileProvider } from "../context/ProfileContext";
import Companymapping from "./CompanyMapping";
import ComapnyNameDescription from "../components/company/companyNameDescription";
import CompanyWidgetSub from "../components/company/CompanyWidgetSub";
import CompanySampleResponse from "../data/companySampleReponse.json";

interface CompanyData {
  logo: string;
  name: string;
}

const CompanyProfile: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");

  const [sampleData, setSampleData] = useState(CompanySampleResponse);
  const companies: CompanyData[] = [
    {
      logo: company,
      name: CompanySampleResponse.data.parent,
    },
  ];

  const subsidiaries: CompanyData[] = CompanySampleResponse.data.children.map(
    (child: any) => ({
      logo: company,
      name: child.name,
    })
  );

  // console.log(sampleData.data.parent);

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
        <ComapnyNameDescription datas={sampleData} />
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
          datas={CompanySampleResponse}
        />
      </ProfileProvider>
    </>
  );
};

export default CompanyProfile;
