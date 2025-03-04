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

const PeopleExample: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  const [datas, setDatas] = useState<any>([]);

  const baseURl = process.env.REACT_APP_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBod, setIsLoadingBod] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryName = queryParams.get("id") || "" || "";
  const peopleName = queryParams.get("name") || "" || "";

  const baseURlFile = process.env.REACT_APP_FILE_URL;

  useEffect(() => {
    setIsLoadingBod(true);
    fetch(`${baseURl}people/get-people-mappin?id=${queryName}`)
      .then((response) => response.json())
      .then((data: CompanyData[]) => {
        //@ts-ignore
        //  console.log(data);
        setData(data);
        setIsLoadingBod(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  /***
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
        {peopleName}
      </p>
    </div>
  );
  */

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="min-h-screen flex flex-col gap-[46px]">
          <ComapnyNameDescription
            datas={[]}
            name={peopleName}
            meta={""}
            id={queryName}
          />
          <div className="p-2">
            {/**
            <OwnershipChart rawData={data} />
            */}
            {!isLoadingBod && data?.length > 1 ? (
              <BODSGraph data={data} />
            ) : (
              <span className="text-center w-full block text-[#000] font-Poppins font-semibold text-[18px]">
                No enough data to draw the chart
              </span>
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

export default PeopleExample;
