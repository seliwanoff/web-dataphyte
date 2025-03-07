import React, { useState, useEffect } from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import ComapnyNameDescription from "../components/company/companyNameDescription";
import { useLocation, useNavigate } from "react-router-dom";
import SkeletonLoader from "../components/skeletonLoader/skeleton";
import BODSGraph from "../components/bod4";

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

const Iframe: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [datas, setDatas] = useState<any>([]);

  const baseURl = process.env.REACT_APP_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBod, setIsLoadingBod] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("id") || "" || "";
  const baseURlFile = process.env.REACT_APP_FILE_URL;

  const sampleData = [
    {
      statementId: "company-001",
      declarationSubject: "global-holdings",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Global Holdings Ltd",
        },
      },
      recordId: "global-holdings",
      recordStatus: "new",
      recordType: "entity",
      recordDetails: {
        entityType: {
          type: "registeredEntity",
        },
        name: "Global Holdings Ltd",
        foundingDate: "2010-01-10",
        identifiers: [
          {
            scheme: "GB-COH",
            id: "000001",
          },
        ],
      },
    },
    {
      statementId: "company-002",
      declarationSubject: "techcorp",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Global Holdings Ltd",
        },
      },
      recordId: "techcorp",
      recordStatus: "new",
      recordType: "entity",
      recordDetails: {
        entityType: {
          type: "registeredEntity",
        },
        name: "TechCorp Ltd",
        foundingDate: "2015-08-20",
        identifiers: [
          {
            scheme: "GB-COH",
            id: "000002",
          },
        ],
      },
    },

    {
      statementId: "company-003",
      declarationSubject: "innosoft",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Global Holdings Ltd",
        },
      },
      recordId: "innosoft",
      recordStatus: "new",
      recordType: "entity",
      recordDetails: {
        entityType: {
          type: "registeredEntity",
        },
        name: "InnoSoft Ltd",
        foundingDate: "2018-04-10",
        identifiers: [
          {
            scheme: "GB-COH",
            id: "000003",
          },
        ],
      },
    },
    {
      statementId: "ownership-002",
      declarationSubject: "innosoft",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Global Holdings Ltd",
        },
      },
      recordId: "ownership-002",
      recordStatus: "new",
      recordType: "relationship",
      recordDetails: {
        subject: "innosoft",
        interestedParty: "global-holdings",
        interests: [
          {
            type: "shareholding",
            beneficialOwnershipOrControl: true,
            directOrIndirect: "direct",
            startDate: "2018-04-10",
          },
        ],
      },
    },
    {
      statementId: "company-004",
      declarationSubject: "Cardri Lmt",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Ibrahim Yusuf Ltd",
        },
      },
      recordId: "Cardri Lmt",
      recordStatus: "new",
      recordType: "entity",
      recordDetails: {
        entityType: {
          type: "registeredEntity",
        },
        name: "Cardri Lmt",
        foundingDate: "2018-04-10",
        identifiers: [
          {
            scheme: "GB-COH",
            id: "000004",
          },
        ],
      },
    },
    {
      statementId: "company-005",
      declarationSubject: "Cardri Lmt 2",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Ibrahim Yusuf Ltd",
        },
      },
      recordId: "Cardri Lmt 2",
      recordStatus: "new",
      recordType: "entity",
      recordDetails: {
        entityType: {
          type: "registeredEntity",
        },
        name: "Cardri Lmt 2",
        foundingDate: "2018-04-10",
        identifiers: [
          {
            scheme: "GB-COH",
            id: "000005",
          },
        ],
      },
    },
    {
      statementId: "ownership-004",
      declarationSubject: "Cardri Lmt 2",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Ibrahim Yusuf Ltd 2",
        },
      },
      recordId: "ownership-004",
      recordStatus: "new",
      recordType: "relationship",
      recordDetails: {
        subject: "Cardri Lmt 2",
        interestedParty: "innosoft",
        interests: [
          {
            type: "shareholding",
            beneficialOwnershipOrControl: true,
            directOrIndirect: "direct",
            startDate: "2018-04-10",
          },
        ],
      },
    },
    {
      statementId: "ownership-003",
      declarationSubject: "Cardri Lmt",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Ibrahim Yusuf Ltd",
        },
      },
      recordId: "ownership-003",
      recordStatus: "new",
      recordType: "relationship",
      recordDetails: {
        subject: "Cardri Lmt",
        interestedParty: "innosoft",
        interests: [
          {
            type: "shareholding",
            beneficialOwnershipOrControl: true,
            directOrIndirect: "direct",
            startDate: "2018-04-10",
          },
        ],
      },
    },
    {
      statementId: "ownership-001",
      declarationSubject: "techcorp",
      statementDate: "2023-06-15",
      publicationDetails: {
        publicationDate: "2023-06-15",
        bodsVersion: "0.4",
        publisher: {
          name: "Global Holdings Ltd",
        },
      },
      recordId: "ownership-001",
      recordStatus: "new",
      recordType: "relationship",
      recordDetails: {
        subject: "techcorp",
        interestedParty: "global-holdings",
        interests: [
          {
            type: "shareholding",
            beneficialOwnershipOrControl: true,
            directOrIndirect: "direct",
            startDate: "2015-08-20",
          },
        ],
      },
    },
  ];
  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseURl}company/getcompanytrees?id=${queryName}`)
      .then((response) => response.json())
      .then((data: CompanyData[]) => {
        //  console.log(data);
        setDatas(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setIsLoadingBod(true);
    fetch(`${baseURl}company/get-company-map?id=${queryName}`)
      .then((response) => response.json())
      .then((data: CompanyData[]) => {
        //@ts-ignore
        // console.log(data.companies);
        setData(data);
        setIsLoadingBod(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const MyNodeComponent: React.FC<{ node: any }> = ({ node }) => (
    <div
      className="bg-[#E9D9FF] w-fit p-1  mx-auto  text-center cursor-pointer hover:bg-gray-100 rounded-sm"
      onClick={() => navigate(`../company-profile?q=&id=${node.id}`)}
    >
      <div className="flex gap-[8px] flex-col justify-center items-center">
        <img
          src={`${baseURlFile}${node.image}`}
          alt=""
          className="h-[40px] w-[40px] rounded-full "
        />
      </div>
      <p className="font-semibol font-Poppins  text-[#000] text-[18px]">
        {node.name}
      </p>
    </div>
  );

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="min-h-screen flex flex-col gap-[46px]">
          {/***
          <ComapnyNameDescription
            datas={datas}
            name={datas?.name}
            meta={""}
            id={datas?.id}
          />
          */}
          <div className="p-2">
            {/**
            <OwnershipChart rawData={data} />
            */}
            {!isLoadingBod && data?.companies?.length > 1 ? (
              <BODSGraph data={data.companies} isType={""} />
            ) : (
              "No enough data to draw chart."
            )}
            {/**
            <OrgChart
              tree={data}
              NodeComponent={MyNodeComponent}
              className="mt-4"
            />
            */}
          </div>
        </div>
      )}
    </>
  );
};

export default Iframe;
